import express from "express";
import * as core from "express-serve-static-core";
import * as http from "http";

import {
  createProxyMiddleware,
  Filter,
} from "http-proxy-middleware";

import "dotenv/config";


class ProxyServer {

  public app: core.Express;

  public pathFilter: Filter = function (_pathname: string, _req: express.Request): boolean {
    let proxy = true;
    return proxy;
  };

  protected started: boolean;

  public server: http.Server | undefined;

  public getApp(): core.Express {
    if (!this.app) {
      this.app = express();
      this.app.use("/", createProxyMiddleware(this.pathFilter, {
        target: process.env.DXP_OE_SERVER_URL,
        changeOrigin: true,
        onProxyReq: (proxyReq, _req, _res, _options) => {
          proxyReq.setHeader("Authorization", `Bearer ${process.env.DXP_OE_SERVER_TOKEN}`);
        },
      }
      ));
    }
    return this.app;

  }

  public async start(port?: number): Promise<http.Server> {

    return new Promise((resolve, _reject) => {
      if (!this.started) {
        if (!port) {
          port = parseInt(process.env.PROXY_PORT);
        }
        this.server = this.getApp().listen(port, () => {

          console.log(`you now can open http://localhost:${port}/... that will proxy towards ${process.env.DXP_OE_SERVER_URL}/...`);
          this.started = true;
          resolve(this.server!);
        });
      }
    });

  }

}

export const proxyServer = new ProxyServer();