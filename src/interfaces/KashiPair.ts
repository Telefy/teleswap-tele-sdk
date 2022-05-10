import { AccrueInfo } from './AccrueInfo'
import { Rebase } from '@telefy/teleswap-core-sdk'
import JSBI from 'jsbi'

export interface KashiPair {
  readonly accrueInfo: AccrueInfo
  readonly collateral: Rebase
  readonly asset: Rebase
  readonly totalCollateralShare: JSBI
  readonly totalAsset: Rebase
  readonly totalBorrow: Rebase
  readonly exchangeRate: JSBI
  readonly oracleExchangeRate: JSBI
  readonly spotExchangeRate: JSBI
  readonly userCollateralShare: JSBI
  readonly userAssetFraction: JSBI
  readonly userBorrowPart: JSBI
}