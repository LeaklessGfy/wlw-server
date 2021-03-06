import { InsertResult, Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { MatchDTO } from './data/match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(MatchDTO) private readonly repo: Repository<MatchDTO>,
  ) {}

  async findAll(): Promise<MatchDTO[]> {
    return await this.repo.find();
  }

  async find(id: number): Promise<MatchDTO> {
    return await this.repo.findOne(id);
  }

  async create(match: MatchDTO): Promise<InsertResult> {
    return await this.repo.insert(match);
  }
}
