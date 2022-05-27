import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sprites?: Maybe<PokemonSprites>;
  types?: Maybe<Array<Maybe<PokemonTypes>>>;
  weight?: Maybe<Scalars['Int']>;
};

export type PokemonListData = {
  __typename?: 'PokemonListData';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PokemonSprites = {
  __typename?: 'PokemonSprites';
  back_default?: Maybe<Scalars['String']>;
  back_female?: Maybe<Scalars['String']>;
  back_shiny?: Maybe<Scalars['String']>;
  back_shiny_female?: Maybe<Scalars['String']>;
  front_default?: Maybe<Scalars['String']>;
  front_female?: Maybe<Scalars['String']>;
  front_shiny?: Maybe<Scalars['String']>;
  front_shiny_female?: Maybe<Scalars['String']>;
  other?: Maybe<PokemonSpritesByOther>;
};

export type PokemonSpritesByOther = {
  __typename?: 'PokemonSpritesByOther';
  deream_world?: Maybe<PokemonSpritesItem>;
  home?: Maybe<PokemonSpritesItem>;
  officialArtworks?: Maybe<PokemonSpritesItem>;
};

export type PokemonSpritesItem = {
  __typename?: 'PokemonSpritesItem';
  front_default?: Maybe<Scalars['String']>;
  front_female?: Maybe<Scalars['String']>;
  front_shiny?: Maybe<Scalars['String']>;
  front_shiny_female?: Maybe<Scalars['String']>;
};

export type PokemonType = {
  __typename?: 'PokemonType';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type PokemonTypes = {
  __typename?: 'PokemonTypes';
  slot?: Maybe<Scalars['Int']>;
  type?: Maybe<Array<Maybe<PokemonType>>>;
};

export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons: Array<Maybe<PokemonListData>>;
};


export type QueryPokemonArgs = {
  id: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonListData: ResolverTypeWrapper<PokemonListData>;
  PokemonSprites: ResolverTypeWrapper<PokemonSprites>;
  PokemonSpritesByOther: ResolverTypeWrapper<PokemonSpritesByOther>;
  PokemonSpritesItem: ResolverTypeWrapper<PokemonSpritesItem>;
  PokemonType: ResolverTypeWrapper<PokemonType>;
  PokemonTypes: ResolverTypeWrapper<PokemonTypes>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Pokemon: Pokemon;
  PokemonListData: PokemonListData;
  PokemonSprites: PokemonSprites;
  PokemonSpritesByOther: PokemonSpritesByOther;
  PokemonSpritesItem: PokemonSpritesItem;
  PokemonType: PokemonType;
  PokemonTypes: PokemonTypes;
  Query: {};
  String: Scalars['String'];
}>;

export type PokemonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = ResolversObject<{
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sprites?: Resolver<Maybe<ResolversTypes['PokemonSprites']>, ParentType, ContextType>;
  types?: Resolver<Maybe<Array<Maybe<ResolversTypes['PokemonTypes']>>>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonListDataResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PokemonListData'] = ResolversParentTypes['PokemonListData']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonSpritesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PokemonSprites'] = ResolversParentTypes['PokemonSprites']> = ResolversObject<{
  back_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  other?: Resolver<Maybe<ResolversTypes['PokemonSpritesByOther']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonSpritesByOtherResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PokemonSpritesByOther'] = ResolversParentTypes['PokemonSpritesByOther']> = ResolversObject<{
  deream_world?: Resolver<Maybe<ResolversTypes['PokemonSpritesItem']>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['PokemonSpritesItem']>, ParentType, ContextType>;
  officialArtworks?: Resolver<Maybe<ResolversTypes['PokemonSpritesItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonSpritesItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PokemonSpritesItem'] = ResolversParentTypes['PokemonSpritesItem']> = ResolversObject<{
  front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PokemonType'] = ResolversParentTypes['PokemonType']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PokemonTypesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PokemonTypes'] = ResolversParentTypes['PokemonTypes']> = ResolversObject<{
  slot?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<Array<Maybe<ResolversTypes['PokemonType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<QueryPokemonArgs, 'id'>>;
  pokemons?: Resolver<Array<Maybe<ResolversTypes['PokemonListData']>>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonListData?: PokemonListDataResolvers<ContextType>;
  PokemonSprites?: PokemonSpritesResolvers<ContextType>;
  PokemonSpritesByOther?: PokemonSpritesByOtherResolvers<ContextType>;
  PokemonSpritesItem?: PokemonSpritesItemResolvers<ContextType>;
  PokemonType?: PokemonTypeResolvers<ContextType>;
  PokemonTypes?: PokemonTypesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

