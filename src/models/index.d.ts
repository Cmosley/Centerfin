import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type M1MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class M1 {
  readonly id: string;
  readonly portfolio_name?: string;
  readonly number_of_clients_subscribed?: number;
  readonly symbols_in_portfolio?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<M1, M1MetaData>);
  static copyOf(source: M1, mutator: (draft: MutableModel<M1, M1MetaData>) => MutableModel<M1, M1MetaData> | void): M1;
}