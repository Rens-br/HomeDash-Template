class templatePlugin {
    constructor(name, socket, database, config, http) {
      this.name = name;
      this.socketHandler = socket;
      this.config = config;
      
      http.registerReactEndpoint(__dirname, plugin.name)
  
      this.registerEndpoints()

      console.log("plugin started: " + name)
    };
  
    registerEndpoints() {
      const domain = this.name;
  
      this.socketHandler.register(domain, "getPluginInfo", async (data) => {
        return this.getInfo()
      });
    }
  
    getInfo() {
      return {
        name: this.name,
        plugin: plugin.name,
        config: this.config
      };
    }
  }
  
  const plugin = {
    name: 'template',
    pluginClass: templatePlugin,
    config: {},
    tile: {
      w: 3, 
      h: 3
    }
  }
  
  exports.plugin = plugin