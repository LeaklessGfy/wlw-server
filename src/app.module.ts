import { Module } from "@nestjs/common";
import { CardsController } from "./cards.controller";
import { ModesController } from "./modes.controller";
import { TurnsController } from "./turns.controller";
import { WrestlersController } from "./wrestlers.controller";
import Services from "./service";

@Module({
  imports: [],
  controllers: [
    CardsController,
    ModesController,
    TurnsController,
    WrestlersController
  ],
  components: Services
})
export class ApplicationModule {}
