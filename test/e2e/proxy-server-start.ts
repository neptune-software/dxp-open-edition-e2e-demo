import {proxyServer} from "./proxy-server";

async function start(){
  await proxyServer.start();
}

start();