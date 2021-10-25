import { Consumption } from "./consumption.entity";

export class Sensor {
    id: number;
    device: string;
    KWh: number;
    value: number;
    status: boolean;
    consumption: Array<Consumption>;
}
