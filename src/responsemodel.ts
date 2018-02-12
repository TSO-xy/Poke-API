import { PokeModel } from './pokemodel';

export class ResponseModel
{
    count: number;
    previous: string;
    results: PokeModel[];
    next: string;
}