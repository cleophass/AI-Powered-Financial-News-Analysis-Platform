import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { BillyService } from './crawlers/billy.service';
import { ForbesCrawlerService } from './crawlers/forbes.service';
import { GrpcExceptionFilter } from './grpc-exception.filter';

@Module({
  imports: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GrpcExceptionFilter,
    },
    ForbesCrawlerService,
    BillyService,
  ],
})
export class AppModule {}
