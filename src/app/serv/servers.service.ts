export class ServerService {
  private servers = [
    {
      id: 1,
      name: 'productionServer',
      status: 'online'
    },
    {
      id: 2,
      name: 'TestServer',
      status: 'offline'
    },
    {
      id: 3,
      name: 'DevServer',
      status: 'offline'
    }
  ];

  gerServers() {
    return this.servers;
  }

  gerServer(id: number) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server
  }

  upateServer(id: number, serverInfo: {name: string, status: string}) {
const server = this.servers.find(
  (s) => {
    return s.id === id
  }
  );
  if (server) {
    server.name = serverInfo.name
    server.status = serverInfo.status
}
}
}
