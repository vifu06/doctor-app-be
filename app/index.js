import './base/env';
import Server from './base/server';
import routes from './routes';

export default new Server().router(routes).listen(process.env.PORT);

