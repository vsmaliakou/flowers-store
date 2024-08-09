import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'red',
        price: 5,
      },
      {
        name: 'Lily',
        color: 'white',
        price: 6,
      },
      {
        name: 'Tulip',
        color: 'yellow',
        price: 7,
      },
    ];
  }
}
