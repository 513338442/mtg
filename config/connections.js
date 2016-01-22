/**
 * Connections
 * 
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.) 
 * A `connection` is that additional information.
 * 
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys 
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://links.sailsjs.org/docs/config/connections
 *
 * 连接
 *`Connections`喜欢“保存设置”为您的适配器。什么之间的差
 *连接和适配器，你可能会问？一个适配器（例如`帆-mysql`）是generic--
 *它需要一些额外的信息的工作（例如，您的数据库主机，密码，用户等）
 *一个`connection`是附加信息。
 *
 *每个模型都必须有一个'connection`属性（字符串），这是引用一个名字
 *这些连接。如果没有，默认的`connection`配置`配置/ models.js`
 *将被应用。当然，一个连接可以（并且通常是）由多个模型共享。
 *。
 *注：如果您使用版本控制，你应该把你的密码/ API密钥
 *在`配置/ local.js`，环境变量，或使用其他策略。
 *（这是为了防止你不经意的数字证书到你的资料库。）
 *
 *有关配置的详细信息，请访问：
 * http://links.sailsjs.org/docs/config/connections
 */

module.exports.connections = {

  // Main persistent file storage
  //主要持久性文件存储
  mtgnode: {
    adapter: 'sails-disk',
    filePath: 'database/'
  },

  // In Memory
  //在内存中
  memory: {
    adapter: 'sails-memory'
  }
};
