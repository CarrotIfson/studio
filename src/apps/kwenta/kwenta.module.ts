import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { KwentaContractFactory } from './contracts';
import { OptimismKwentaCrossContractPositionFetcher } from './optimism/kwenta.cross.contract-position-fetcher';
import { OptimismKwentaIsolatedContractPositionFetcher } from './optimism/kwenta.isolated.contract-position-fetcher';
import { OptimismKwentaLpStakingContractPositionFetcher } from './optimism/kwenta.lp-staking.contract-position-fetcher';
import { OptimismKwentaStakingContractPositionFetcher } from './optimism/kwenta.staking.contract-position-fetcher';

@Module({
  providers: [
    KwentaContractFactory,
    OptimismKwentaIsolatedContractPositionFetcher,
    OptimismKwentaCrossContractPositionFetcher,
    OptimismKwentaStakingContractPositionFetcher,
    OptimismKwentaLpStakingContractPositionFetcher,
  ],
})
export class KwentaAppModule extends AbstractApp() {}
