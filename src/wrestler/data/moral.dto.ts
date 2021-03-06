import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiModelProperty } from '@nestjs/swagger';

@Entity({ name: 'moral' })
export class MoralDTO {
  @ApiModelProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  ego: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  respect: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  perseverance: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  loyalty: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  boldness: number;

  @ApiModelProperty({ type: Number })
  @Column('int')
  aggresivity: number;
}
