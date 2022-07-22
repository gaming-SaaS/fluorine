
import { bootstrap } from 'nest-plus';
import { version, name } from "../package.json";
import { AppModule } from "./app.module";

bootstrap(name, version.split('.')[0], AppModule);
