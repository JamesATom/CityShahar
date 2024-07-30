
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PropertyOwner
 * 
 */
export type PropertyOwner = $Result.DefaultSelection<Prisma.$PropertyOwnerPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>
/**
 * Model ImageSet
 * 
 */
export type ImageSet = $Result.DefaultSelection<Prisma.$ImageSetPayload>
/**
 * Model GeneralAttributes
 * 
 */
export type GeneralAttributes = $Result.DefaultSelection<Prisma.$GeneralAttributesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PropertyOwners
 * const propertyOwners = await prisma.propertyOwner.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PropertyOwners
   * const propertyOwners = await prisma.propertyOwner.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.propertyOwner`: Exposes CRUD operations for the **PropertyOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyOwners
    * const propertyOwners = await prisma.propertyOwner.findMany()
    * ```
    */
  get propertyOwner(): Prisma.PropertyOwnerDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs>;

  /**
   * `prisma.imageSet`: Exposes CRUD operations for the **ImageSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageSets
    * const imageSets = await prisma.imageSet.findMany()
    * ```
    */
  get imageSet(): Prisma.ImageSetDelegate<ExtArgs>;

  /**
   * `prisma.generalAttributes`: Exposes CRUD operations for the **GeneralAttributes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneralAttributes
    * const generalAttributes = await prisma.generalAttributes.findMany()
    * ```
    */
  get generalAttributes(): Prisma.GeneralAttributesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PropertyOwner: 'PropertyOwner',
    Role: 'Role',
    Property: 'Property',
    Category: 'Category',
    Type: 'Type',
    Address: 'Address',
    Region: 'Region',
    District: 'District',
    ImageSet: 'ImageSet',
    GeneralAttributes: 'GeneralAttributes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "propertyOwner" | "role" | "property" | "category" | "type" | "address" | "region" | "district" | "imageSet" | "generalAttributes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PropertyOwner: {
        payload: Prisma.$PropertyOwnerPayload<ExtArgs>
        fields: Prisma.PropertyOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>
          }
          findFirst: {
            args: Prisma.PropertyOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>
          }
          findMany: {
            args: Prisma.PropertyOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>[]
          }
          create: {
            args: Prisma.PropertyOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>
          }
          createMany: {
            args: Prisma.PropertyOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>[]
          }
          delete: {
            args: Prisma.PropertyOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>
          }
          update: {
            args: Prisma.PropertyOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>
          }
          deleteMany: {
            args: Prisma.PropertyOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyOwnerPayload>
          }
          aggregate: {
            args: Prisma.PropertyOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyOwner>
          }
          groupBy: {
            args: Prisma.PropertyOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyOwnerCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      ImageSet: {
        payload: Prisma.$ImageSetPayload<ExtArgs>
        fields: Prisma.ImageSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>
          }
          findFirst: {
            args: Prisma.ImageSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>
          }
          findMany: {
            args: Prisma.ImageSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>[]
          }
          create: {
            args: Prisma.ImageSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>
          }
          createMany: {
            args: Prisma.ImageSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>[]
          }
          delete: {
            args: Prisma.ImageSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>
          }
          update: {
            args: Prisma.ImageSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>
          }
          deleteMany: {
            args: Prisma.ImageSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageSetPayload>
          }
          aggregate: {
            args: Prisma.ImageSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageSet>
          }
          groupBy: {
            args: Prisma.ImageSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageSetCountArgs<ExtArgs>
            result: $Utils.Optional<ImageSetCountAggregateOutputType> | number
          }
        }
      }
      GeneralAttributes: {
        payload: Prisma.$GeneralAttributesPayload<ExtArgs>
        fields: Prisma.GeneralAttributesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneralAttributesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneralAttributesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>
          }
          findFirst: {
            args: Prisma.GeneralAttributesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneralAttributesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>
          }
          findMany: {
            args: Prisma.GeneralAttributesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>[]
          }
          create: {
            args: Prisma.GeneralAttributesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>
          }
          createMany: {
            args: Prisma.GeneralAttributesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneralAttributesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>[]
          }
          delete: {
            args: Prisma.GeneralAttributesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>
          }
          update: {
            args: Prisma.GeneralAttributesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>
          }
          deleteMany: {
            args: Prisma.GeneralAttributesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneralAttributesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeneralAttributesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneralAttributesPayload>
          }
          aggregate: {
            args: Prisma.GeneralAttributesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneralAttributes>
          }
          groupBy: {
            args: Prisma.GeneralAttributesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneralAttributesGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneralAttributesCountArgs<ExtArgs>
            result: $Utils.Optional<GeneralAttributesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PropertyOwnerCountOutputType
   */

  export type PropertyOwnerCountOutputType = {
    properties: number
  }

  export type PropertyOwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyOwnerCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyOwnerCountOutputType without action
   */
  export type PropertyOwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwnerCountOutputType
     */
    select?: PropertyOwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyOwnerCountOutputType without action
   */
  export type PropertyOwnerCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    propertyOwners: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyOwners?: boolean | RoleCountOutputTypeCountPropertyOwnersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPropertyOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyOwnerWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    properties: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | CategoryCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    categories: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TypeCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    properties: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | AddressCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    addresses: number
    districts: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | RegionCountOutputTypeCountAddressesArgs
    districts?: boolean | RegionCountOutputTypeCountDistrictsArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountDistrictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
  }


  /**
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    addresses: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | DistrictCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }


  /**
   * Count Type ImageSetCountOutputType
   */

  export type ImageSetCountOutputType = {
    properties: number
  }

  export type ImageSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ImageSetCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * ImageSetCountOutputType without action
   */
  export type ImageSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSetCountOutputType
     */
    select?: ImageSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageSetCountOutputType without action
   */
  export type ImageSetCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type GeneralAttributesCountOutputType
   */

  export type GeneralAttributesCountOutputType = {
    properties: number
  }

  export type GeneralAttributesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | GeneralAttributesCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * GeneralAttributesCountOutputType without action
   */
  export type GeneralAttributesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributesCountOutputType
     */
    select?: GeneralAttributesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneralAttributesCountOutputType without action
   */
  export type GeneralAttributesCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PropertyOwner
   */

  export type AggregatePropertyOwner = {
    _count: PropertyOwnerCountAggregateOutputType | null
    _avg: PropertyOwnerAvgAggregateOutputType | null
    _sum: PropertyOwnerSumAggregateOutputType | null
    _min: PropertyOwnerMinAggregateOutputType | null
    _max: PropertyOwnerMaxAggregateOutputType | null
  }

  export type PropertyOwnerAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type PropertyOwnerSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type PropertyOwnerMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    roleId: number | null
    avatarUrl: string | null
  }

  export type PropertyOwnerMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    roleId: number | null
    avatarUrl: string | null
  }

  export type PropertyOwnerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    roleId: number
    avatarUrl: number
    avatarSet: number
    _all: number
  }


  export type PropertyOwnerAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type PropertyOwnerSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type PropertyOwnerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    roleId?: true
    avatarUrl?: true
  }

  export type PropertyOwnerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    roleId?: true
    avatarUrl?: true
  }

  export type PropertyOwnerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    roleId?: true
    avatarUrl?: true
    avatarSet?: true
    _all?: true
  }

  export type PropertyOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyOwner to aggregate.
     */
    where?: PropertyOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyOwners to fetch.
     */
    orderBy?: PropertyOwnerOrderByWithRelationInput | PropertyOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyOwners
    **/
    _count?: true | PropertyOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyOwnerMaxAggregateInputType
  }

  export type GetPropertyOwnerAggregateType<T extends PropertyOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyOwner[P]>
      : GetScalarType<T[P], AggregatePropertyOwner[P]>
  }




  export type PropertyOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyOwnerWhereInput
    orderBy?: PropertyOwnerOrderByWithAggregationInput | PropertyOwnerOrderByWithAggregationInput[]
    by: PropertyOwnerScalarFieldEnum[] | PropertyOwnerScalarFieldEnum
    having?: PropertyOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyOwnerCountAggregateInputType | true
    _avg?: PropertyOwnerAvgAggregateInputType
    _sum?: PropertyOwnerSumAggregateInputType
    _min?: PropertyOwnerMinAggregateInputType
    _max?: PropertyOwnerMaxAggregateInputType
  }

  export type PropertyOwnerGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    roleId: number
    avatarUrl: string | null
    avatarSet: JsonValue | null
    _count: PropertyOwnerCountAggregateOutputType | null
    _avg: PropertyOwnerAvgAggregateOutputType | null
    _sum: PropertyOwnerSumAggregateOutputType | null
    _min: PropertyOwnerMinAggregateOutputType | null
    _max: PropertyOwnerMaxAggregateOutputType | null
  }

  type GetPropertyOwnerGroupByPayload<T extends PropertyOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyOwnerGroupByOutputType[P]>
        }
      >
    >


  export type PropertyOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    roleId?: boolean
    avatarUrl?: boolean
    avatarSet?: boolean
    properties?: boolean | PropertyOwner$propertiesArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | PropertyOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyOwner"]>

  export type PropertyOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    roleId?: boolean
    avatarUrl?: boolean
    avatarSet?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyOwner"]>

  export type PropertyOwnerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    roleId?: boolean
    avatarUrl?: boolean
    avatarSet?: boolean
  }

  export type PropertyOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyOwner$propertiesArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    _count?: boolean | PropertyOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $PropertyOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyOwner"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      roleId: number
      avatarUrl: string | null
      avatarSet: Prisma.JsonValue | null
    }, ExtArgs["result"]["propertyOwner"]>
    composites: {}
  }

  type PropertyOwnerGetPayload<S extends boolean | null | undefined | PropertyOwnerDefaultArgs> = $Result.GetResult<Prisma.$PropertyOwnerPayload, S>

  type PropertyOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyOwnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyOwnerCountAggregateInputType | true
    }

  export interface PropertyOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyOwner'], meta: { name: 'PropertyOwner' } }
    /**
     * Find zero or one PropertyOwner that matches the filter.
     * @param {PropertyOwnerFindUniqueArgs} args - Arguments to find a PropertyOwner
     * @example
     * // Get one PropertyOwner
     * const propertyOwner = await prisma.propertyOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyOwnerFindUniqueArgs>(args: SelectSubset<T, PropertyOwnerFindUniqueArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PropertyOwner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyOwnerFindUniqueOrThrowArgs} args - Arguments to find a PropertyOwner
     * @example
     * // Get one PropertyOwner
     * const propertyOwner = await prisma.propertyOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PropertyOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerFindFirstArgs} args - Arguments to find a PropertyOwner
     * @example
     * // Get one PropertyOwner
     * const propertyOwner = await prisma.propertyOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyOwnerFindFirstArgs>(args?: SelectSubset<T, PropertyOwnerFindFirstArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PropertyOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerFindFirstOrThrowArgs} args - Arguments to find a PropertyOwner
     * @example
     * // Get one PropertyOwner
     * const propertyOwner = await prisma.propertyOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PropertyOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyOwners
     * const propertyOwners = await prisma.propertyOwner.findMany()
     * 
     * // Get first 10 PropertyOwners
     * const propertyOwners = await prisma.propertyOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyOwnerWithIdOnly = await prisma.propertyOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyOwnerFindManyArgs>(args?: SelectSubset<T, PropertyOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PropertyOwner.
     * @param {PropertyOwnerCreateArgs} args - Arguments to create a PropertyOwner.
     * @example
     * // Create one PropertyOwner
     * const PropertyOwner = await prisma.propertyOwner.create({
     *   data: {
     *     // ... data to create a PropertyOwner
     *   }
     * })
     * 
     */
    create<T extends PropertyOwnerCreateArgs>(args: SelectSubset<T, PropertyOwnerCreateArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PropertyOwners.
     * @param {PropertyOwnerCreateManyArgs} args - Arguments to create many PropertyOwners.
     * @example
     * // Create many PropertyOwners
     * const propertyOwner = await prisma.propertyOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyOwnerCreateManyArgs>(args?: SelectSubset<T, PropertyOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyOwners and returns the data saved in the database.
     * @param {PropertyOwnerCreateManyAndReturnArgs} args - Arguments to create many PropertyOwners.
     * @example
     * // Create many PropertyOwners
     * const propertyOwner = await prisma.propertyOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyOwners and only return the `id`
     * const propertyOwnerWithIdOnly = await prisma.propertyOwner.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PropertyOwner.
     * @param {PropertyOwnerDeleteArgs} args - Arguments to delete one PropertyOwner.
     * @example
     * // Delete one PropertyOwner
     * const PropertyOwner = await prisma.propertyOwner.delete({
     *   where: {
     *     // ... filter to delete one PropertyOwner
     *   }
     * })
     * 
     */
    delete<T extends PropertyOwnerDeleteArgs>(args: SelectSubset<T, PropertyOwnerDeleteArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PropertyOwner.
     * @param {PropertyOwnerUpdateArgs} args - Arguments to update one PropertyOwner.
     * @example
     * // Update one PropertyOwner
     * const propertyOwner = await prisma.propertyOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyOwnerUpdateArgs>(args: SelectSubset<T, PropertyOwnerUpdateArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PropertyOwners.
     * @param {PropertyOwnerDeleteManyArgs} args - Arguments to filter PropertyOwners to delete.
     * @example
     * // Delete a few PropertyOwners
     * const { count } = await prisma.propertyOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyOwnerDeleteManyArgs>(args?: SelectSubset<T, PropertyOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyOwners
     * const propertyOwner = await prisma.propertyOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyOwnerUpdateManyArgs>(args: SelectSubset<T, PropertyOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyOwner.
     * @param {PropertyOwnerUpsertArgs} args - Arguments to update or create a PropertyOwner.
     * @example
     * // Update or create a PropertyOwner
     * const propertyOwner = await prisma.propertyOwner.upsert({
     *   create: {
     *     // ... data to create a PropertyOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyOwner we want to update
     *   }
     * })
     */
    upsert<T extends PropertyOwnerUpsertArgs>(args: SelectSubset<T, PropertyOwnerUpsertArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PropertyOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerCountArgs} args - Arguments to filter PropertyOwners to count.
     * @example
     * // Count the number of PropertyOwners
     * const count = await prisma.propertyOwner.count({
     *   where: {
     *     // ... the filter for the PropertyOwners we want to count
     *   }
     * })
    **/
    count<T extends PropertyOwnerCountArgs>(
      args?: Subset<T, PropertyOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyOwnerAggregateArgs>(args: Subset<T, PropertyOwnerAggregateArgs>): Prisma.PrismaPromise<GetPropertyOwnerAggregateType<T>>

    /**
     * Group by PropertyOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyOwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyOwnerGroupByArgs['orderBy'] }
        : { orderBy?: PropertyOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyOwner model
   */
  readonly fields: PropertyOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends PropertyOwner$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyOwner$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyOwner model
   */ 
  interface PropertyOwnerFieldRefs {
    readonly id: FieldRef<"PropertyOwner", 'Int'>
    readonly firstName: FieldRef<"PropertyOwner", 'String'>
    readonly lastName: FieldRef<"PropertyOwner", 'String'>
    readonly roleId: FieldRef<"PropertyOwner", 'Int'>
    readonly avatarUrl: FieldRef<"PropertyOwner", 'String'>
    readonly avatarSet: FieldRef<"PropertyOwner", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * PropertyOwner findUnique
   */
  export type PropertyOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PropertyOwner to fetch.
     */
    where: PropertyOwnerWhereUniqueInput
  }

  /**
   * PropertyOwner findUniqueOrThrow
   */
  export type PropertyOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PropertyOwner to fetch.
     */
    where: PropertyOwnerWhereUniqueInput
  }

  /**
   * PropertyOwner findFirst
   */
  export type PropertyOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PropertyOwner to fetch.
     */
    where?: PropertyOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyOwners to fetch.
     */
    orderBy?: PropertyOwnerOrderByWithRelationInput | PropertyOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyOwners.
     */
    cursor?: PropertyOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyOwners.
     */
    distinct?: PropertyOwnerScalarFieldEnum | PropertyOwnerScalarFieldEnum[]
  }

  /**
   * PropertyOwner findFirstOrThrow
   */
  export type PropertyOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PropertyOwner to fetch.
     */
    where?: PropertyOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyOwners to fetch.
     */
    orderBy?: PropertyOwnerOrderByWithRelationInput | PropertyOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyOwners.
     */
    cursor?: PropertyOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyOwners.
     */
    distinct?: PropertyOwnerScalarFieldEnum | PropertyOwnerScalarFieldEnum[]
  }

  /**
   * PropertyOwner findMany
   */
  export type PropertyOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * Filter, which PropertyOwners to fetch.
     */
    where?: PropertyOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyOwners to fetch.
     */
    orderBy?: PropertyOwnerOrderByWithRelationInput | PropertyOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyOwners.
     */
    cursor?: PropertyOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyOwners.
     */
    skip?: number
    distinct?: PropertyOwnerScalarFieldEnum | PropertyOwnerScalarFieldEnum[]
  }

  /**
   * PropertyOwner create
   */
  export type PropertyOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyOwner.
     */
    data: XOR<PropertyOwnerCreateInput, PropertyOwnerUncheckedCreateInput>
  }

  /**
   * PropertyOwner createMany
   */
  export type PropertyOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyOwners.
     */
    data: PropertyOwnerCreateManyInput | PropertyOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyOwner createManyAndReturn
   */
  export type PropertyOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PropertyOwners.
     */
    data: PropertyOwnerCreateManyInput | PropertyOwnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyOwner update
   */
  export type PropertyOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyOwner.
     */
    data: XOR<PropertyOwnerUpdateInput, PropertyOwnerUncheckedUpdateInput>
    /**
     * Choose, which PropertyOwner to update.
     */
    where: PropertyOwnerWhereUniqueInput
  }

  /**
   * PropertyOwner updateMany
   */
  export type PropertyOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyOwners.
     */
    data: XOR<PropertyOwnerUpdateManyMutationInput, PropertyOwnerUncheckedUpdateManyInput>
    /**
     * Filter which PropertyOwners to update
     */
    where?: PropertyOwnerWhereInput
  }

  /**
   * PropertyOwner upsert
   */
  export type PropertyOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyOwner to update in case it exists.
     */
    where: PropertyOwnerWhereUniqueInput
    /**
     * In case the PropertyOwner found by the `where` argument doesn't exist, create a new PropertyOwner with this data.
     */
    create: XOR<PropertyOwnerCreateInput, PropertyOwnerUncheckedCreateInput>
    /**
     * In case the PropertyOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyOwnerUpdateInput, PropertyOwnerUncheckedUpdateInput>
  }

  /**
   * PropertyOwner delete
   */
  export type PropertyOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    /**
     * Filter which PropertyOwner to delete.
     */
    where: PropertyOwnerWhereUniqueInput
  }

  /**
   * PropertyOwner deleteMany
   */
  export type PropertyOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyOwners to delete
     */
    where?: PropertyOwnerWhereInput
  }

  /**
   * PropertyOwner.properties
   */
  export type PropertyOwner$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * PropertyOwner without action
   */
  export type PropertyOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    key: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    key: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    key: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    key?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    key?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    key: string
    name: JsonValue
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    propertyOwners?: boolean | Role$propertyOwnersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyOwners?: boolean | Role$propertyOwnersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      propertyOwners: Prisma.$PropertyOwnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: Prisma.JsonValue
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propertyOwners<T extends Role$propertyOwnersArgs<ExtArgs> = {}>(args?: Subset<T, Role$propertyOwnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly key: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.propertyOwners
   */
  export type Role$propertyOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyOwner
     */
    select?: PropertyOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyOwnerInclude<ExtArgs> | null
    where?: PropertyOwnerWhereInput
    orderBy?: PropertyOwnerOrderByWithRelationInput | PropertyOwnerOrderByWithRelationInput[]
    cursor?: PropertyOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyOwnerScalarFieldEnum | PropertyOwnerScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    addressId: number | null
    viewCount: number | null
    imageSetsId: number | null
    generalAttributesId: number | null
    propertyOwnerId: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    addressId: number | null
    viewCount: number | null
    imageSetsId: number | null
    generalAttributesId: number | null
    propertyOwnerId: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    statusKey: string | null
    routeKey: string | null
    unit: string | null
    currency: string | null
    addressId: number | null
    phone: string | null
    videoLink: string | null
    viewCount: number | null
    isCommissioned: boolean | null
    imageSetsId: number | null
    generalAttributesId: number | null
    propertyOwnerId: number | null
    isFavorite: boolean | null
    isHidden: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    statusKey: string | null
    routeKey: string | null
    unit: string | null
    currency: string | null
    addressId: number | null
    phone: string | null
    videoLink: string | null
    viewCount: number | null
    isCommissioned: boolean | null
    imageSetsId: number | null
    generalAttributesId: number | null
    propertyOwnerId: number | null
    isFavorite: boolean | null
    isHidden: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    publishedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    viewName: number
    boardName: number
    categoryId: number
    statusKey: number
    routeKey: number
    price: number
    priceByUnit: number
    unit: number
    currency: number
    description: number
    addressId: number
    phone: number
    videoLink: number
    viewCount: number
    isCommissioned: number
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: number
    isHidden: number
    createdAt: number
    updatedAt: number
    publishedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    categoryId?: true
    addressId?: true
    viewCount?: true
    imageSetsId?: true
    generalAttributesId?: true
    propertyOwnerId?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    categoryId?: true
    addressId?: true
    viewCount?: true
    imageSetsId?: true
    generalAttributesId?: true
    propertyOwnerId?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    categoryId?: true
    statusKey?: true
    routeKey?: true
    unit?: true
    currency?: true
    addressId?: true
    phone?: true
    videoLink?: true
    viewCount?: true
    isCommissioned?: true
    imageSetsId?: true
    generalAttributesId?: true
    propertyOwnerId?: true
    isFavorite?: true
    isHidden?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    categoryId?: true
    statusKey?: true
    routeKey?: true
    unit?: true
    currency?: true
    addressId?: true
    phone?: true
    videoLink?: true
    viewCount?: true
    isCommissioned?: true
    imageSetsId?: true
    generalAttributesId?: true
    propertyOwnerId?: true
    isFavorite?: true
    isHidden?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    viewName?: true
    boardName?: true
    categoryId?: true
    statusKey?: true
    routeKey?: true
    price?: true
    priceByUnit?: true
    unit?: true
    currency?: true
    description?: true
    addressId?: true
    phone?: true
    videoLink?: true
    viewCount?: true
    isCommissioned?: true
    imageSetsId?: true
    generalAttributesId?: true
    propertyOwnerId?: true
    isFavorite?: true
    isHidden?: true
    createdAt?: true
    updatedAt?: true
    publishedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    viewName: JsonValue
    boardName: JsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonValue
    priceByUnit: JsonValue | null
    unit: string
    currency: string
    description: JsonValue
    addressId: number
    phone: string
    videoLink: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt: Date
    updatedAt: Date
    publishedAt: Date | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewName?: boolean
    boardName?: boolean
    categoryId?: boolean
    statusKey?: boolean
    routeKey?: boolean
    price?: boolean
    priceByUnit?: boolean
    unit?: boolean
    currency?: boolean
    description?: boolean
    addressId?: boolean
    phone?: boolean
    videoLink?: boolean
    viewCount?: boolean
    isCommissioned?: boolean
    imageSetsId?: boolean
    generalAttributesId?: boolean
    propertyOwnerId?: boolean
    isFavorite?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    generalAttributes?: boolean | GeneralAttributesDefaultArgs<ExtArgs>
    imageSet?: boolean | ImageSetDefaultArgs<ExtArgs>
    propertyOwner?: boolean | PropertyOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewName?: boolean
    boardName?: boolean
    categoryId?: boolean
    statusKey?: boolean
    routeKey?: boolean
    price?: boolean
    priceByUnit?: boolean
    unit?: boolean
    currency?: boolean
    description?: boolean
    addressId?: boolean
    phone?: boolean
    videoLink?: boolean
    viewCount?: boolean
    isCommissioned?: boolean
    imageSetsId?: boolean
    generalAttributesId?: boolean
    propertyOwnerId?: boolean
    isFavorite?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    generalAttributes?: boolean | GeneralAttributesDefaultArgs<ExtArgs>
    imageSet?: boolean | ImageSetDefaultArgs<ExtArgs>
    propertyOwner?: boolean | PropertyOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    viewName?: boolean
    boardName?: boolean
    categoryId?: boolean
    statusKey?: boolean
    routeKey?: boolean
    price?: boolean
    priceByUnit?: boolean
    unit?: boolean
    currency?: boolean
    description?: boolean
    addressId?: boolean
    phone?: boolean
    videoLink?: boolean
    viewCount?: boolean
    isCommissioned?: boolean
    imageSetsId?: boolean
    generalAttributesId?: boolean
    propertyOwnerId?: boolean
    isFavorite?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publishedAt?: boolean
  }

  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    generalAttributes?: boolean | GeneralAttributesDefaultArgs<ExtArgs>
    imageSet?: boolean | ImageSetDefaultArgs<ExtArgs>
    propertyOwner?: boolean | PropertyOwnerDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    generalAttributes?: boolean | GeneralAttributesDefaultArgs<ExtArgs>
    imageSet?: boolean | ImageSetDefaultArgs<ExtArgs>
    propertyOwner?: boolean | PropertyOwnerDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      generalAttributes: Prisma.$GeneralAttributesPayload<ExtArgs>
      imageSet: Prisma.$ImageSetPayload<ExtArgs>
      propertyOwner: Prisma.$PropertyOwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      viewName: Prisma.JsonValue
      boardName: Prisma.JsonValue
      categoryId: number
      statusKey: string
      routeKey: string
      price: Prisma.JsonValue
      priceByUnit: Prisma.JsonValue | null
      unit: string
      currency: string
      description: Prisma.JsonValue
      addressId: number
      phone: string
      videoLink: string | null
      viewCount: number
      isCommissioned: boolean
      imageSetsId: number
      generalAttributesId: number
      propertyOwnerId: number
      isFavorite: boolean
      isHidden: boolean
      createdAt: Date
      updatedAt: Date
      publishedAt: Date | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    generalAttributes<T extends GeneralAttributesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAttributesDefaultArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    imageSet<T extends ImageSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageSetDefaultArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    propertyOwner<T extends PropertyOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyOwnerDefaultArgs<ExtArgs>>): Prisma__PropertyOwnerClient<$Result.GetResult<Prisma.$PropertyOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */ 
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly viewName: FieldRef<"Property", 'Json'>
    readonly boardName: FieldRef<"Property", 'Json'>
    readonly categoryId: FieldRef<"Property", 'Int'>
    readonly statusKey: FieldRef<"Property", 'String'>
    readonly routeKey: FieldRef<"Property", 'String'>
    readonly price: FieldRef<"Property", 'Json'>
    readonly priceByUnit: FieldRef<"Property", 'Json'>
    readonly unit: FieldRef<"Property", 'String'>
    readonly currency: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'Json'>
    readonly addressId: FieldRef<"Property", 'Int'>
    readonly phone: FieldRef<"Property", 'String'>
    readonly videoLink: FieldRef<"Property", 'String'>
    readonly viewCount: FieldRef<"Property", 'Int'>
    readonly isCommissioned: FieldRef<"Property", 'Boolean'>
    readonly imageSetsId: FieldRef<"Property", 'Int'>
    readonly generalAttributesId: FieldRef<"Property", 'Int'>
    readonly propertyOwnerId: FieldRef<"Property", 'Int'>
    readonly isFavorite: FieldRef<"Property", 'Boolean'>
    readonly isHidden: FieldRef<"Property", 'Boolean'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly publishedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    typeId: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    typeId?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    typeId: number
    name: JsonValue
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeId?: boolean
    name?: boolean
    type?: boolean | TypeDefaultArgs<ExtArgs>
    properties?: boolean | Category$propertiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeId?: boolean
    name?: boolean
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    typeId?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TypeDefaultArgs<ExtArgs>
    properties?: boolean | Category$propertiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      type: Prisma.$TypePayload<ExtArgs>
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeId: number
      name: Prisma.JsonValue
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    properties<T extends Category$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Category$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly typeId: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.properties
   */
  export type Category$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
    totalCount: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
    totalCount: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    key: string | null
    totalCount: number | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    key: string | null
    totalCount: number | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    key: number
    name: number
    secondaryName: number
    totalCount: number
    children: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
    totalCount?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
    totalCount?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    key?: true
    totalCount?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    key?: true
    totalCount?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    secondaryName?: true
    totalCount?: true
    children?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    key: string
    name: JsonValue
    secondaryName: JsonValue
    totalCount: number
    children: JsonValue
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    secondaryName?: boolean
    totalCount?: boolean
    children?: boolean
    categories?: boolean | Type$categoriesArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    secondaryName?: boolean
    totalCount?: boolean
    children?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    secondaryName?: boolean
    totalCount?: boolean
    children?: boolean
  }

  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Type$categoriesArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      name: Prisma.JsonValue
      secondaryName: Prisma.JsonValue
      totalCount: number
      children: Prisma.JsonValue
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Type$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Type$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */ 
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly key: FieldRef<"Type", 'String'>
    readonly name: FieldRef<"Type", 'Json'>
    readonly secondaryName: FieldRef<"Type", 'Json'>
    readonly totalCount: FieldRef<"Type", 'Int'>
    readonly children: FieldRef<"Type", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
  }

  /**
   * Type.categories
   */
  export type Type$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    districtId: number | null
    regionId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    districtId: number | null
    regionId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    addressRouteKey: string | null
    addressTypeKey: string | null
    districtId: number | null
    regionId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    addressRouteKey: string | null
    addressTypeKey: string | null
    districtId: number | null
    regionId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    area: number
    house: number
    geoLocation: number
    fullAddress: number
    metros: number
    addressRouteKey: number
    addressTypeKey: number
    districtId: number
    regionId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    districtId?: true
    regionId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    districtId?: true
    regionId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    addressRouteKey?: true
    addressTypeKey?: true
    districtId?: true
    regionId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    addressRouteKey?: true
    addressTypeKey?: true
    districtId?: true
    regionId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    area?: true
    house?: true
    geoLocation?: true
    fullAddress?: true
    metros?: true
    addressRouteKey?: true
    addressTypeKey?: true
    districtId?: true
    regionId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    area: JsonValue
    house: JsonValue
    geoLocation: JsonValue
    fullAddress: JsonValue
    metros: JsonValue
    addressRouteKey: string
    addressTypeKey: string
    districtId: number | null
    regionId: number | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
    house?: boolean
    geoLocation?: boolean
    fullAddress?: boolean
    metros?: boolean
    addressRouteKey?: boolean
    addressTypeKey?: boolean
    districtId?: boolean
    regionId?: boolean
    district?: boolean | Address$districtArgs<ExtArgs>
    region?: boolean | Address$regionArgs<ExtArgs>
    properties?: boolean | Address$propertiesArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
    house?: boolean
    geoLocation?: boolean
    fullAddress?: boolean
    metros?: boolean
    addressRouteKey?: boolean
    addressTypeKey?: boolean
    districtId?: boolean
    regionId?: boolean
    district?: boolean | Address$districtArgs<ExtArgs>
    region?: boolean | Address$regionArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    area?: boolean
    house?: boolean
    geoLocation?: boolean
    fullAddress?: boolean
    metros?: boolean
    addressRouteKey?: boolean
    addressTypeKey?: boolean
    districtId?: boolean
    regionId?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | Address$districtArgs<ExtArgs>
    region?: boolean | Address$regionArgs<ExtArgs>
    properties?: boolean | Address$propertiesArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | Address$districtArgs<ExtArgs>
    region?: boolean | Address$regionArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      district: Prisma.$DistrictPayload<ExtArgs> | null
      region: Prisma.$RegionPayload<ExtArgs> | null
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      area: Prisma.JsonValue
      house: Prisma.JsonValue
      geoLocation: Prisma.JsonValue
      fullAddress: Prisma.JsonValue
      metros: Prisma.JsonValue
      addressRouteKey: string
      addressTypeKey: string
      districtId: number | null
      regionId: number | null
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    district<T extends Address$districtArgs<ExtArgs> = {}>(args?: Subset<T, Address$districtArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    region<T extends Address$regionArgs<ExtArgs> = {}>(args?: Subset<T, Address$regionArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    properties<T extends Address$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Address$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly area: FieldRef<"Address", 'Json'>
    readonly house: FieldRef<"Address", 'Json'>
    readonly geoLocation: FieldRef<"Address", 'Json'>
    readonly fullAddress: FieldRef<"Address", 'Json'>
    readonly metros: FieldRef<"Address", 'Json'>
    readonly addressRouteKey: FieldRef<"Address", 'String'>
    readonly addressTypeKey: FieldRef<"Address", 'String'>
    readonly districtId: FieldRef<"Address", 'Int'>
    readonly regionId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }

  /**
   * Address.district
   */
  export type Address$districtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    where?: DistrictWhereInput
  }

  /**
   * Address.region
   */
  export type Address$regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }

  /**
   * Address.properties
   */
  export type Address$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addresses?: boolean | Region$addressesArgs<ExtArgs>
    districts?: boolean | Region$districtsArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Region$addressesArgs<ExtArgs>
    districts?: boolean | Region$districtsArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      districts: Prisma.$DistrictPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Region$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Region$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany"> | Null>
    districts<T extends Region$districtsArgs<ExtArgs> = {}>(args?: Subset<T, Region$districtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */ 
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
  }

  /**
   * Region.addresses
   */
  export type Region$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Region.districts
   */
  export type Region$districtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    cursor?: DistrictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type DistrictSumAggregateOutputType = {
    id: number | null
    regionId: number | null
  }

  export type DistrictMinAggregateOutputType = {
    id: number | null
    name: string | null
    regionId: number | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: number | null
    name: string | null
    regionId: number | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    regionId: number
    _all: number
  }


  export type DistrictAvgAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type DistrictSumAggregateInputType = {
    id?: true
    regionId?: true
  }

  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    regionId?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    regionId?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    regionId?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistrictAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistrictSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _avg?: DistrictAvgAggregateInputType
    _sum?: DistrictSumAggregateInputType
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: number
    name: string
    regionId: number
    _count: DistrictCountAggregateOutputType | null
    _avg: DistrictAvgAggregateOutputType | null
    _sum: DistrictSumAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionId?: boolean
    addresses?: boolean | District$addressesArgs<ExtArgs>
    regions?: boolean | RegionDefaultArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    regionId?: boolean
    regions?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectScalar = {
    id?: boolean
    name?: boolean
    regionId?: boolean
  }

  export type DistrictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | District$addressesArgs<ExtArgs>
    regions?: boolean | RegionDefaultArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistrictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      regions: Prisma.$RegionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      regionId: number
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {DistrictCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends District$addressesArgs<ExtArgs> = {}>(args?: Subset<T, District$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany"> | Null>
    regions<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the District model
   */ 
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'Int'>
    readonly name: FieldRef<"District", 'String'>
    readonly regionId: FieldRef<"District", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District createManyAndReturn
   */
  export type DistrictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
  }

  /**
   * District.addresses
   */
  export type District$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
  }


  /**
   * Model ImageSet
   */

  export type AggregateImageSet = {
    _count: ImageSetCountAggregateOutputType | null
    _avg: ImageSetAvgAggregateOutputType | null
    _sum: ImageSetSumAggregateOutputType | null
    _min: ImageSetMinAggregateOutputType | null
    _max: ImageSetMaxAggregateOutputType | null
  }

  export type ImageSetAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSetSumAggregateOutputType = {
    id: number | null
  }

  export type ImageSetMinAggregateOutputType = {
    id: number | null
  }

  export type ImageSetMaxAggregateOutputType = {
    id: number | null
  }

  export type ImageSetCountAggregateOutputType = {
    id: number
    images: number
    _all: number
  }


  export type ImageSetAvgAggregateInputType = {
    id?: true
  }

  export type ImageSetSumAggregateInputType = {
    id?: true
  }

  export type ImageSetMinAggregateInputType = {
    id?: true
  }

  export type ImageSetMaxAggregateInputType = {
    id?: true
  }

  export type ImageSetCountAggregateInputType = {
    id?: true
    images?: true
    _all?: true
  }

  export type ImageSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageSet to aggregate.
     */
    where?: ImageSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageSets to fetch.
     */
    orderBy?: ImageSetOrderByWithRelationInput | ImageSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageSets
    **/
    _count?: true | ImageSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageSetMaxAggregateInputType
  }

  export type GetImageSetAggregateType<T extends ImageSetAggregateArgs> = {
        [P in keyof T & keyof AggregateImageSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageSet[P]>
      : GetScalarType<T[P], AggregateImageSet[P]>
  }




  export type ImageSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageSetWhereInput
    orderBy?: ImageSetOrderByWithAggregationInput | ImageSetOrderByWithAggregationInput[]
    by: ImageSetScalarFieldEnum[] | ImageSetScalarFieldEnum
    having?: ImageSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageSetCountAggregateInputType | true
    _avg?: ImageSetAvgAggregateInputType
    _sum?: ImageSetSumAggregateInputType
    _min?: ImageSetMinAggregateInputType
    _max?: ImageSetMaxAggregateInputType
  }

  export type ImageSetGroupByOutputType = {
    id: number
    images: JsonValue
    _count: ImageSetCountAggregateOutputType | null
    _avg: ImageSetAvgAggregateOutputType | null
    _sum: ImageSetSumAggregateOutputType | null
    _min: ImageSetMinAggregateOutputType | null
    _max: ImageSetMaxAggregateOutputType | null
  }

  type GetImageSetGroupByPayload<T extends ImageSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageSetGroupByOutputType[P]>
            : GetScalarType<T[P], ImageSetGroupByOutputType[P]>
        }
      >
    >


  export type ImageSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    images?: boolean
    properties?: boolean | ImageSet$propertiesArgs<ExtArgs>
    _count?: boolean | ImageSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageSet"]>

  export type ImageSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    images?: boolean
  }, ExtArgs["result"]["imageSet"]>

  export type ImageSetSelectScalar = {
    id?: boolean
    images?: boolean
  }

  export type ImageSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | ImageSet$propertiesArgs<ExtArgs>
    _count?: boolean | ImageSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImageSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageSet"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      images: Prisma.JsonValue
    }, ExtArgs["result"]["imageSet"]>
    composites: {}
  }

  type ImageSetGetPayload<S extends boolean | null | undefined | ImageSetDefaultArgs> = $Result.GetResult<Prisma.$ImageSetPayload, S>

  type ImageSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageSetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageSetCountAggregateInputType | true
    }

  export interface ImageSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageSet'], meta: { name: 'ImageSet' } }
    /**
     * Find zero or one ImageSet that matches the filter.
     * @param {ImageSetFindUniqueArgs} args - Arguments to find a ImageSet
     * @example
     * // Get one ImageSet
     * const imageSet = await prisma.imageSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageSetFindUniqueArgs>(args: SelectSubset<T, ImageSetFindUniqueArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ImageSet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImageSetFindUniqueOrThrowArgs} args - Arguments to find a ImageSet
     * @example
     * // Get one ImageSet
     * const imageSet = await prisma.imageSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageSetFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ImageSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetFindFirstArgs} args - Arguments to find a ImageSet
     * @example
     * // Get one ImageSet
     * const imageSet = await prisma.imageSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageSetFindFirstArgs>(args?: SelectSubset<T, ImageSetFindFirstArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ImageSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetFindFirstOrThrowArgs} args - Arguments to find a ImageSet
     * @example
     * // Get one ImageSet
     * const imageSet = await prisma.imageSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageSetFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ImageSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageSets
     * const imageSets = await prisma.imageSet.findMany()
     * 
     * // Get first 10 ImageSets
     * const imageSets = await prisma.imageSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageSetWithIdOnly = await prisma.imageSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageSetFindManyArgs>(args?: SelectSubset<T, ImageSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ImageSet.
     * @param {ImageSetCreateArgs} args - Arguments to create a ImageSet.
     * @example
     * // Create one ImageSet
     * const ImageSet = await prisma.imageSet.create({
     *   data: {
     *     // ... data to create a ImageSet
     *   }
     * })
     * 
     */
    create<T extends ImageSetCreateArgs>(args: SelectSubset<T, ImageSetCreateArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ImageSets.
     * @param {ImageSetCreateManyArgs} args - Arguments to create many ImageSets.
     * @example
     * // Create many ImageSets
     * const imageSet = await prisma.imageSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageSetCreateManyArgs>(args?: SelectSubset<T, ImageSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageSets and returns the data saved in the database.
     * @param {ImageSetCreateManyAndReturnArgs} args - Arguments to create many ImageSets.
     * @example
     * // Create many ImageSets
     * const imageSet = await prisma.imageSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageSets and only return the `id`
     * const imageSetWithIdOnly = await prisma.imageSet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageSetCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ImageSet.
     * @param {ImageSetDeleteArgs} args - Arguments to delete one ImageSet.
     * @example
     * // Delete one ImageSet
     * const ImageSet = await prisma.imageSet.delete({
     *   where: {
     *     // ... filter to delete one ImageSet
     *   }
     * })
     * 
     */
    delete<T extends ImageSetDeleteArgs>(args: SelectSubset<T, ImageSetDeleteArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ImageSet.
     * @param {ImageSetUpdateArgs} args - Arguments to update one ImageSet.
     * @example
     * // Update one ImageSet
     * const imageSet = await prisma.imageSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageSetUpdateArgs>(args: SelectSubset<T, ImageSetUpdateArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ImageSets.
     * @param {ImageSetDeleteManyArgs} args - Arguments to filter ImageSets to delete.
     * @example
     * // Delete a few ImageSets
     * const { count } = await prisma.imageSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageSetDeleteManyArgs>(args?: SelectSubset<T, ImageSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageSets
     * const imageSet = await prisma.imageSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageSetUpdateManyArgs>(args: SelectSubset<T, ImageSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageSet.
     * @param {ImageSetUpsertArgs} args - Arguments to update or create a ImageSet.
     * @example
     * // Update or create a ImageSet
     * const imageSet = await prisma.imageSet.upsert({
     *   create: {
     *     // ... data to create a ImageSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageSet we want to update
     *   }
     * })
     */
    upsert<T extends ImageSetUpsertArgs>(args: SelectSubset<T, ImageSetUpsertArgs<ExtArgs>>): Prisma__ImageSetClient<$Result.GetResult<Prisma.$ImageSetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ImageSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetCountArgs} args - Arguments to filter ImageSets to count.
     * @example
     * // Count the number of ImageSets
     * const count = await prisma.imageSet.count({
     *   where: {
     *     // ... the filter for the ImageSets we want to count
     *   }
     * })
    **/
    count<T extends ImageSetCountArgs>(
      args?: Subset<T, ImageSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageSetAggregateArgs>(args: Subset<T, ImageSetAggregateArgs>): Prisma.PrismaPromise<GetImageSetAggregateType<T>>

    /**
     * Group by ImageSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageSetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageSetGroupByArgs['orderBy'] }
        : { orderBy?: ImageSetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageSet model
   */
  readonly fields: ImageSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends ImageSet$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, ImageSet$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImageSet model
   */ 
  interface ImageSetFieldRefs {
    readonly id: FieldRef<"ImageSet", 'Int'>
    readonly images: FieldRef<"ImageSet", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ImageSet findUnique
   */
  export type ImageSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * Filter, which ImageSet to fetch.
     */
    where: ImageSetWhereUniqueInput
  }

  /**
   * ImageSet findUniqueOrThrow
   */
  export type ImageSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * Filter, which ImageSet to fetch.
     */
    where: ImageSetWhereUniqueInput
  }

  /**
   * ImageSet findFirst
   */
  export type ImageSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * Filter, which ImageSet to fetch.
     */
    where?: ImageSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageSets to fetch.
     */
    orderBy?: ImageSetOrderByWithRelationInput | ImageSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageSets.
     */
    cursor?: ImageSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageSets.
     */
    distinct?: ImageSetScalarFieldEnum | ImageSetScalarFieldEnum[]
  }

  /**
   * ImageSet findFirstOrThrow
   */
  export type ImageSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * Filter, which ImageSet to fetch.
     */
    where?: ImageSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageSets to fetch.
     */
    orderBy?: ImageSetOrderByWithRelationInput | ImageSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageSets.
     */
    cursor?: ImageSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageSets.
     */
    distinct?: ImageSetScalarFieldEnum | ImageSetScalarFieldEnum[]
  }

  /**
   * ImageSet findMany
   */
  export type ImageSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * Filter, which ImageSets to fetch.
     */
    where?: ImageSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageSets to fetch.
     */
    orderBy?: ImageSetOrderByWithRelationInput | ImageSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageSets.
     */
    cursor?: ImageSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageSets.
     */
    skip?: number
    distinct?: ImageSetScalarFieldEnum | ImageSetScalarFieldEnum[]
  }

  /**
   * ImageSet create
   */
  export type ImageSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageSet.
     */
    data: XOR<ImageSetCreateInput, ImageSetUncheckedCreateInput>
  }

  /**
   * ImageSet createMany
   */
  export type ImageSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageSets.
     */
    data: ImageSetCreateManyInput | ImageSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageSet createManyAndReturn
   */
  export type ImageSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ImageSets.
     */
    data: ImageSetCreateManyInput | ImageSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageSet update
   */
  export type ImageSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageSet.
     */
    data: XOR<ImageSetUpdateInput, ImageSetUncheckedUpdateInput>
    /**
     * Choose, which ImageSet to update.
     */
    where: ImageSetWhereUniqueInput
  }

  /**
   * ImageSet updateMany
   */
  export type ImageSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageSets.
     */
    data: XOR<ImageSetUpdateManyMutationInput, ImageSetUncheckedUpdateManyInput>
    /**
     * Filter which ImageSets to update
     */
    where?: ImageSetWhereInput
  }

  /**
   * ImageSet upsert
   */
  export type ImageSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageSet to update in case it exists.
     */
    where: ImageSetWhereUniqueInput
    /**
     * In case the ImageSet found by the `where` argument doesn't exist, create a new ImageSet with this data.
     */
    create: XOR<ImageSetCreateInput, ImageSetUncheckedCreateInput>
    /**
     * In case the ImageSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageSetUpdateInput, ImageSetUncheckedUpdateInput>
  }

  /**
   * ImageSet delete
   */
  export type ImageSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
    /**
     * Filter which ImageSet to delete.
     */
    where: ImageSetWhereUniqueInput
  }

  /**
   * ImageSet deleteMany
   */
  export type ImageSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageSets to delete
     */
    where?: ImageSetWhereInput
  }

  /**
   * ImageSet.properties
   */
  export type ImageSet$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * ImageSet without action
   */
  export type ImageSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageSet
     */
    select?: ImageSetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageSetInclude<ExtArgs> | null
  }


  /**
   * Model GeneralAttributes
   */

  export type AggregateGeneralAttributes = {
    _count: GeneralAttributesCountAggregateOutputType | null
    _avg: GeneralAttributesAvgAggregateOutputType | null
    _sum: GeneralAttributesSumAggregateOutputType | null
    _min: GeneralAttributesMinAggregateOutputType | null
    _max: GeneralAttributesMaxAggregateOutputType | null
  }

  export type GeneralAttributesAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneralAttributesSumAggregateOutputType = {
    id: number | null
  }

  export type GeneralAttributesMinAggregateOutputType = {
    id: number | null
  }

  export type GeneralAttributesMaxAggregateOutputType = {
    id: number | null
  }

  export type GeneralAttributesCountAggregateOutputType = {
    id: number
    attributes: number
    _all: number
  }


  export type GeneralAttributesAvgAggregateInputType = {
    id?: true
  }

  export type GeneralAttributesSumAggregateInputType = {
    id?: true
  }

  export type GeneralAttributesMinAggregateInputType = {
    id?: true
  }

  export type GeneralAttributesMaxAggregateInputType = {
    id?: true
  }

  export type GeneralAttributesCountAggregateInputType = {
    id?: true
    attributes?: true
    _all?: true
  }

  export type GeneralAttributesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralAttributes to aggregate.
     */
    where?: GeneralAttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAttributes to fetch.
     */
    orderBy?: GeneralAttributesOrderByWithRelationInput | GeneralAttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneralAttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneralAttributes
    **/
    _count?: true | GeneralAttributesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneralAttributesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneralAttributesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneralAttributesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneralAttributesMaxAggregateInputType
  }

  export type GetGeneralAttributesAggregateType<T extends GeneralAttributesAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneralAttributes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneralAttributes[P]>
      : GetScalarType<T[P], AggregateGeneralAttributes[P]>
  }




  export type GeneralAttributesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneralAttributesWhereInput
    orderBy?: GeneralAttributesOrderByWithAggregationInput | GeneralAttributesOrderByWithAggregationInput[]
    by: GeneralAttributesScalarFieldEnum[] | GeneralAttributesScalarFieldEnum
    having?: GeneralAttributesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneralAttributesCountAggregateInputType | true
    _avg?: GeneralAttributesAvgAggregateInputType
    _sum?: GeneralAttributesSumAggregateInputType
    _min?: GeneralAttributesMinAggregateInputType
    _max?: GeneralAttributesMaxAggregateInputType
  }

  export type GeneralAttributesGroupByOutputType = {
    id: number
    attributes: JsonValue
    _count: GeneralAttributesCountAggregateOutputType | null
    _avg: GeneralAttributesAvgAggregateOutputType | null
    _sum: GeneralAttributesSumAggregateOutputType | null
    _min: GeneralAttributesMinAggregateOutputType | null
    _max: GeneralAttributesMaxAggregateOutputType | null
  }

  type GetGeneralAttributesGroupByPayload<T extends GeneralAttributesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneralAttributesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneralAttributesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneralAttributesGroupByOutputType[P]>
            : GetScalarType<T[P], GeneralAttributesGroupByOutputType[P]>
        }
      >
    >


  export type GeneralAttributesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attributes?: boolean
    properties?: boolean | GeneralAttributes$propertiesArgs<ExtArgs>
    _count?: boolean | GeneralAttributesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generalAttributes"]>

  export type GeneralAttributesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attributes?: boolean
  }, ExtArgs["result"]["generalAttributes"]>

  export type GeneralAttributesSelectScalar = {
    id?: boolean
    attributes?: boolean
  }

  export type GeneralAttributesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | GeneralAttributes$propertiesArgs<ExtArgs>
    _count?: boolean | GeneralAttributesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneralAttributesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GeneralAttributesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneralAttributes"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      attributes: Prisma.JsonValue
    }, ExtArgs["result"]["generalAttributes"]>
    composites: {}
  }

  type GeneralAttributesGetPayload<S extends boolean | null | undefined | GeneralAttributesDefaultArgs> = $Result.GetResult<Prisma.$GeneralAttributesPayload, S>

  type GeneralAttributesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GeneralAttributesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GeneralAttributesCountAggregateInputType | true
    }

  export interface GeneralAttributesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneralAttributes'], meta: { name: 'GeneralAttributes' } }
    /**
     * Find zero or one GeneralAttributes that matches the filter.
     * @param {GeneralAttributesFindUniqueArgs} args - Arguments to find a GeneralAttributes
     * @example
     * // Get one GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneralAttributesFindUniqueArgs>(args: SelectSubset<T, GeneralAttributesFindUniqueArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GeneralAttributes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GeneralAttributesFindUniqueOrThrowArgs} args - Arguments to find a GeneralAttributes
     * @example
     * // Get one GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneralAttributesFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneralAttributesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GeneralAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesFindFirstArgs} args - Arguments to find a GeneralAttributes
     * @example
     * // Get one GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneralAttributesFindFirstArgs>(args?: SelectSubset<T, GeneralAttributesFindFirstArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GeneralAttributes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesFindFirstOrThrowArgs} args - Arguments to find a GeneralAttributes
     * @example
     * // Get one GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneralAttributesFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneralAttributesFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GeneralAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.findMany()
     * 
     * // Get first 10 GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generalAttributesWithIdOnly = await prisma.generalAttributes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneralAttributesFindManyArgs>(args?: SelectSubset<T, GeneralAttributesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GeneralAttributes.
     * @param {GeneralAttributesCreateArgs} args - Arguments to create a GeneralAttributes.
     * @example
     * // Create one GeneralAttributes
     * const GeneralAttributes = await prisma.generalAttributes.create({
     *   data: {
     *     // ... data to create a GeneralAttributes
     *   }
     * })
     * 
     */
    create<T extends GeneralAttributesCreateArgs>(args: SelectSubset<T, GeneralAttributesCreateArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GeneralAttributes.
     * @param {GeneralAttributesCreateManyArgs} args - Arguments to create many GeneralAttributes.
     * @example
     * // Create many GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneralAttributesCreateManyArgs>(args?: SelectSubset<T, GeneralAttributesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneralAttributes and returns the data saved in the database.
     * @param {GeneralAttributesCreateManyAndReturnArgs} args - Arguments to create many GeneralAttributes.
     * @example
     * // Create many GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneralAttributes and only return the `id`
     * const generalAttributesWithIdOnly = await prisma.generalAttributes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneralAttributesCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneralAttributesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GeneralAttributes.
     * @param {GeneralAttributesDeleteArgs} args - Arguments to delete one GeneralAttributes.
     * @example
     * // Delete one GeneralAttributes
     * const GeneralAttributes = await prisma.generalAttributes.delete({
     *   where: {
     *     // ... filter to delete one GeneralAttributes
     *   }
     * })
     * 
     */
    delete<T extends GeneralAttributesDeleteArgs>(args: SelectSubset<T, GeneralAttributesDeleteArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GeneralAttributes.
     * @param {GeneralAttributesUpdateArgs} args - Arguments to update one GeneralAttributes.
     * @example
     * // Update one GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneralAttributesUpdateArgs>(args: SelectSubset<T, GeneralAttributesUpdateArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GeneralAttributes.
     * @param {GeneralAttributesDeleteManyArgs} args - Arguments to filter GeneralAttributes to delete.
     * @example
     * // Delete a few GeneralAttributes
     * const { count } = await prisma.generalAttributes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneralAttributesDeleteManyArgs>(args?: SelectSubset<T, GeneralAttributesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneralAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneralAttributesUpdateManyArgs>(args: SelectSubset<T, GeneralAttributesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeneralAttributes.
     * @param {GeneralAttributesUpsertArgs} args - Arguments to update or create a GeneralAttributes.
     * @example
     * // Update or create a GeneralAttributes
     * const generalAttributes = await prisma.generalAttributes.upsert({
     *   create: {
     *     // ... data to create a GeneralAttributes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneralAttributes we want to update
     *   }
     * })
     */
    upsert<T extends GeneralAttributesUpsertArgs>(args: SelectSubset<T, GeneralAttributesUpsertArgs<ExtArgs>>): Prisma__GeneralAttributesClient<$Result.GetResult<Prisma.$GeneralAttributesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GeneralAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesCountArgs} args - Arguments to filter GeneralAttributes to count.
     * @example
     * // Count the number of GeneralAttributes
     * const count = await prisma.generalAttributes.count({
     *   where: {
     *     // ... the filter for the GeneralAttributes we want to count
     *   }
     * })
    **/
    count<T extends GeneralAttributesCountArgs>(
      args?: Subset<T, GeneralAttributesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneralAttributesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneralAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneralAttributesAggregateArgs>(args: Subset<T, GeneralAttributesAggregateArgs>): Prisma.PrismaPromise<GetGeneralAttributesAggregateType<T>>

    /**
     * Group by GeneralAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneralAttributesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneralAttributesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneralAttributesGroupByArgs['orderBy'] }
        : { orderBy?: GeneralAttributesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneralAttributesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneralAttributesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneralAttributes model
   */
  readonly fields: GeneralAttributesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneralAttributes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneralAttributesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends GeneralAttributes$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, GeneralAttributes$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneralAttributes model
   */ 
  interface GeneralAttributesFieldRefs {
    readonly id: FieldRef<"GeneralAttributes", 'Int'>
    readonly attributes: FieldRef<"GeneralAttributes", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * GeneralAttributes findUnique
   */
  export type GeneralAttributesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAttributes to fetch.
     */
    where: GeneralAttributesWhereUniqueInput
  }

  /**
   * GeneralAttributes findUniqueOrThrow
   */
  export type GeneralAttributesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAttributes to fetch.
     */
    where: GeneralAttributesWhereUniqueInput
  }

  /**
   * GeneralAttributes findFirst
   */
  export type GeneralAttributesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAttributes to fetch.
     */
    where?: GeneralAttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAttributes to fetch.
     */
    orderBy?: GeneralAttributesOrderByWithRelationInput | GeneralAttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralAttributes.
     */
    cursor?: GeneralAttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralAttributes.
     */
    distinct?: GeneralAttributesScalarFieldEnum | GeneralAttributesScalarFieldEnum[]
  }

  /**
   * GeneralAttributes findFirstOrThrow
   */
  export type GeneralAttributesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAttributes to fetch.
     */
    where?: GeneralAttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAttributes to fetch.
     */
    orderBy?: GeneralAttributesOrderByWithRelationInput | GeneralAttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneralAttributes.
     */
    cursor?: GeneralAttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneralAttributes.
     */
    distinct?: GeneralAttributesScalarFieldEnum | GeneralAttributesScalarFieldEnum[]
  }

  /**
   * GeneralAttributes findMany
   */
  export type GeneralAttributesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * Filter, which GeneralAttributes to fetch.
     */
    where?: GeneralAttributesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneralAttributes to fetch.
     */
    orderBy?: GeneralAttributesOrderByWithRelationInput | GeneralAttributesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneralAttributes.
     */
    cursor?: GeneralAttributesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneralAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneralAttributes.
     */
    skip?: number
    distinct?: GeneralAttributesScalarFieldEnum | GeneralAttributesScalarFieldEnum[]
  }

  /**
   * GeneralAttributes create
   */
  export type GeneralAttributesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneralAttributes.
     */
    data: XOR<GeneralAttributesCreateInput, GeneralAttributesUncheckedCreateInput>
  }

  /**
   * GeneralAttributes createMany
   */
  export type GeneralAttributesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneralAttributes.
     */
    data: GeneralAttributesCreateManyInput | GeneralAttributesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralAttributes createManyAndReturn
   */
  export type GeneralAttributesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GeneralAttributes.
     */
    data: GeneralAttributesCreateManyInput | GeneralAttributesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneralAttributes update
   */
  export type GeneralAttributesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneralAttributes.
     */
    data: XOR<GeneralAttributesUpdateInput, GeneralAttributesUncheckedUpdateInput>
    /**
     * Choose, which GeneralAttributes to update.
     */
    where: GeneralAttributesWhereUniqueInput
  }

  /**
   * GeneralAttributes updateMany
   */
  export type GeneralAttributesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneralAttributes.
     */
    data: XOR<GeneralAttributesUpdateManyMutationInput, GeneralAttributesUncheckedUpdateManyInput>
    /**
     * Filter which GeneralAttributes to update
     */
    where?: GeneralAttributesWhereInput
  }

  /**
   * GeneralAttributes upsert
   */
  export type GeneralAttributesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneralAttributes to update in case it exists.
     */
    where: GeneralAttributesWhereUniqueInput
    /**
     * In case the GeneralAttributes found by the `where` argument doesn't exist, create a new GeneralAttributes with this data.
     */
    create: XOR<GeneralAttributesCreateInput, GeneralAttributesUncheckedCreateInput>
    /**
     * In case the GeneralAttributes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneralAttributesUpdateInput, GeneralAttributesUncheckedUpdateInput>
  }

  /**
   * GeneralAttributes delete
   */
  export type GeneralAttributesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
    /**
     * Filter which GeneralAttributes to delete.
     */
    where: GeneralAttributesWhereUniqueInput
  }

  /**
   * GeneralAttributes deleteMany
   */
  export type GeneralAttributesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneralAttributes to delete
     */
    where?: GeneralAttributesWhereInput
  }

  /**
   * GeneralAttributes.properties
   */
  export type GeneralAttributes$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * GeneralAttributes without action
   */
  export type GeneralAttributesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneralAttributes
     */
    select?: GeneralAttributesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneralAttributesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PropertyOwnerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    roleId: 'roleId',
    avatarUrl: 'avatarUrl',
    avatarSet: 'avatarSet'
  };

  export type PropertyOwnerScalarFieldEnum = (typeof PropertyOwnerScalarFieldEnum)[keyof typeof PropertyOwnerScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    viewName: 'viewName',
    boardName: 'boardName',
    categoryId: 'categoryId',
    statusKey: 'statusKey',
    routeKey: 'routeKey',
    price: 'price',
    priceByUnit: 'priceByUnit',
    unit: 'unit',
    currency: 'currency',
    description: 'description',
    addressId: 'addressId',
    phone: 'phone',
    videoLink: 'videoLink',
    viewCount: 'viewCount',
    isCommissioned: 'isCommissioned',
    imageSetsId: 'imageSetsId',
    generalAttributesId: 'generalAttributesId',
    propertyOwnerId: 'propertyOwnerId',
    isFavorite: 'isFavorite',
    isHidden: 'isHidden',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    publishedAt: 'publishedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    typeId: 'typeId',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    secondaryName: 'secondaryName',
    totalCount: 'totalCount',
    children: 'children'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    area: 'area',
    house: 'house',
    geoLocation: 'geoLocation',
    fullAddress: 'fullAddress',
    metros: 'metros',
    addressRouteKey: 'addressRouteKey',
    addressTypeKey: 'addressTypeKey',
    districtId: 'districtId',
    regionId: 'regionId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    regionId: 'regionId'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const ImageSetScalarFieldEnum: {
    id: 'id',
    images: 'images'
  };

  export type ImageSetScalarFieldEnum = (typeof ImageSetScalarFieldEnum)[keyof typeof ImageSetScalarFieldEnum]


  export const GeneralAttributesScalarFieldEnum: {
    id: 'id',
    attributes: 'attributes'
  };

  export type GeneralAttributesScalarFieldEnum = (typeof GeneralAttributesScalarFieldEnum)[keyof typeof GeneralAttributesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PropertyOwnerWhereInput = {
    AND?: PropertyOwnerWhereInput | PropertyOwnerWhereInput[]
    OR?: PropertyOwnerWhereInput[]
    NOT?: PropertyOwnerWhereInput | PropertyOwnerWhereInput[]
    id?: IntFilter<"PropertyOwner"> | number
    firstName?: StringFilter<"PropertyOwner"> | string
    lastName?: StringFilter<"PropertyOwner"> | string
    roleId?: IntFilter<"PropertyOwner"> | number
    avatarUrl?: StringNullableFilter<"PropertyOwner"> | string | null
    avatarSet?: JsonNullableFilter<"PropertyOwner">
    properties?: PropertyListRelationFilter
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type PropertyOwnerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    roleId?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    avatarSet?: SortOrderInput | SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
  }

  export type PropertyOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyOwnerWhereInput | PropertyOwnerWhereInput[]
    OR?: PropertyOwnerWhereInput[]
    NOT?: PropertyOwnerWhereInput | PropertyOwnerWhereInput[]
    firstName?: StringFilter<"PropertyOwner"> | string
    lastName?: StringFilter<"PropertyOwner"> | string
    roleId?: IntFilter<"PropertyOwner"> | number
    avatarUrl?: StringNullableFilter<"PropertyOwner"> | string | null
    avatarSet?: JsonNullableFilter<"PropertyOwner">
    properties?: PropertyListRelationFilter
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "id">

  export type PropertyOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    roleId?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    avatarSet?: SortOrderInput | SortOrder
    _count?: PropertyOwnerCountOrderByAggregateInput
    _avg?: PropertyOwnerAvgOrderByAggregateInput
    _max?: PropertyOwnerMaxOrderByAggregateInput
    _min?: PropertyOwnerMinOrderByAggregateInput
    _sum?: PropertyOwnerSumOrderByAggregateInput
  }

  export type PropertyOwnerScalarWhereWithAggregatesInput = {
    AND?: PropertyOwnerScalarWhereWithAggregatesInput | PropertyOwnerScalarWhereWithAggregatesInput[]
    OR?: PropertyOwnerScalarWhereWithAggregatesInput[]
    NOT?: PropertyOwnerScalarWhereWithAggregatesInput | PropertyOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyOwner"> | number
    firstName?: StringWithAggregatesFilter<"PropertyOwner"> | string
    lastName?: StringWithAggregatesFilter<"PropertyOwner"> | string
    roleId?: IntWithAggregatesFilter<"PropertyOwner"> | number
    avatarUrl?: StringNullableWithAggregatesFilter<"PropertyOwner"> | string | null
    avatarSet?: JsonNullableWithAggregatesFilter<"PropertyOwner">
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    key?: StringFilter<"Role"> | string
    name?: JsonFilter<"Role">
    propertyOwners?: PropertyOwnerListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    propertyOwners?: PropertyOwnerOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    key?: StringFilter<"Role"> | string
    name?: JsonFilter<"Role">
    propertyOwners?: PropertyOwnerListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    key?: StringWithAggregatesFilter<"Role"> | string
    name?: JsonWithAggregatesFilter<"Role">
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    viewName?: JsonFilter<"Property">
    boardName?: JsonFilter<"Property">
    categoryId?: IntFilter<"Property"> | number
    statusKey?: StringFilter<"Property"> | string
    routeKey?: StringFilter<"Property"> | string
    price?: JsonFilter<"Property">
    priceByUnit?: JsonNullableFilter<"Property">
    unit?: StringFilter<"Property"> | string
    currency?: StringFilter<"Property"> | string
    description?: JsonFilter<"Property">
    addressId?: IntFilter<"Property"> | number
    phone?: StringFilter<"Property"> | string
    videoLink?: StringNullableFilter<"Property"> | string | null
    viewCount?: IntFilter<"Property"> | number
    isCommissioned?: BoolFilter<"Property"> | boolean
    imageSetsId?: IntFilter<"Property"> | number
    generalAttributesId?: IntFilter<"Property"> | number
    propertyOwnerId?: IntFilter<"Property"> | number
    isFavorite?: BoolFilter<"Property"> | boolean
    isHidden?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    address?: XOR<AddressRelationFilter, AddressWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    generalAttributes?: XOR<GeneralAttributesRelationFilter, GeneralAttributesWhereInput>
    imageSet?: XOR<ImageSetRelationFilter, ImageSetWhereInput>
    propertyOwner?: XOR<PropertyOwnerRelationFilter, PropertyOwnerWhereInput>
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    viewName?: SortOrder
    boardName?: SortOrder
    categoryId?: SortOrder
    statusKey?: SortOrder
    routeKey?: SortOrder
    price?: SortOrder
    priceByUnit?: SortOrderInput | SortOrder
    unit?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    addressId?: SortOrder
    phone?: SortOrder
    videoLink?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    isCommissioned?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    generalAttributes?: GeneralAttributesOrderByWithRelationInput
    imageSet?: ImageSetOrderByWithRelationInput
    propertyOwner?: PropertyOwnerOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    viewName?: JsonFilter<"Property">
    boardName?: JsonFilter<"Property">
    categoryId?: IntFilter<"Property"> | number
    statusKey?: StringFilter<"Property"> | string
    routeKey?: StringFilter<"Property"> | string
    price?: JsonFilter<"Property">
    priceByUnit?: JsonNullableFilter<"Property">
    unit?: StringFilter<"Property"> | string
    currency?: StringFilter<"Property"> | string
    description?: JsonFilter<"Property">
    addressId?: IntFilter<"Property"> | number
    phone?: StringFilter<"Property"> | string
    videoLink?: StringNullableFilter<"Property"> | string | null
    viewCount?: IntFilter<"Property"> | number
    isCommissioned?: BoolFilter<"Property"> | boolean
    imageSetsId?: IntFilter<"Property"> | number
    generalAttributesId?: IntFilter<"Property"> | number
    propertyOwnerId?: IntFilter<"Property"> | number
    isFavorite?: BoolFilter<"Property"> | boolean
    isHidden?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    address?: XOR<AddressRelationFilter, AddressWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    generalAttributes?: XOR<GeneralAttributesRelationFilter, GeneralAttributesWhereInput>
    imageSet?: XOR<ImageSetRelationFilter, ImageSetWhereInput>
    propertyOwner?: XOR<PropertyOwnerRelationFilter, PropertyOwnerWhereInput>
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    viewName?: SortOrder
    boardName?: SortOrder
    categoryId?: SortOrder
    statusKey?: SortOrder
    routeKey?: SortOrder
    price?: SortOrder
    priceByUnit?: SortOrderInput | SortOrder
    unit?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    addressId?: SortOrder
    phone?: SortOrder
    videoLink?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    isCommissioned?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    viewName?: JsonWithAggregatesFilter<"Property">
    boardName?: JsonWithAggregatesFilter<"Property">
    categoryId?: IntWithAggregatesFilter<"Property"> | number
    statusKey?: StringWithAggregatesFilter<"Property"> | string
    routeKey?: StringWithAggregatesFilter<"Property"> | string
    price?: JsonWithAggregatesFilter<"Property">
    priceByUnit?: JsonNullableWithAggregatesFilter<"Property">
    unit?: StringWithAggregatesFilter<"Property"> | string
    currency?: StringWithAggregatesFilter<"Property"> | string
    description?: JsonWithAggregatesFilter<"Property">
    addressId?: IntWithAggregatesFilter<"Property"> | number
    phone?: StringWithAggregatesFilter<"Property"> | string
    videoLink?: StringNullableWithAggregatesFilter<"Property"> | string | null
    viewCount?: IntWithAggregatesFilter<"Property"> | number
    isCommissioned?: BoolWithAggregatesFilter<"Property"> | boolean
    imageSetsId?: IntWithAggregatesFilter<"Property"> | number
    generalAttributesId?: IntWithAggregatesFilter<"Property"> | number
    propertyOwnerId?: IntWithAggregatesFilter<"Property"> | number
    isFavorite?: BoolWithAggregatesFilter<"Property"> | boolean
    isHidden?: BoolWithAggregatesFilter<"Property"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    typeId?: IntFilter<"Category"> | number
    name?: JsonFilter<"Category">
    type?: XOR<TypeRelationFilter, TypeWhereInput>
    properties?: PropertyListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    typeId?: SortOrder
    name?: SortOrder
    type?: TypeOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    typeId?: IntFilter<"Category"> | number
    name?: JsonFilter<"Category">
    type?: XOR<TypeRelationFilter, TypeWhereInput>
    properties?: PropertyListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    typeId?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    typeId?: IntWithAggregatesFilter<"Category"> | number
    name?: JsonWithAggregatesFilter<"Category">
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    key?: StringFilter<"Type"> | string
    name?: JsonFilter<"Type">
    secondaryName?: JsonFilter<"Type">
    totalCount?: IntFilter<"Type"> | number
    children?: JsonFilter<"Type">
    categories?: CategoryListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    secondaryName?: SortOrder
    totalCount?: SortOrder
    children?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    key?: StringFilter<"Type"> | string
    name?: JsonFilter<"Type">
    secondaryName?: JsonFilter<"Type">
    totalCount?: IntFilter<"Type"> | number
    children?: JsonFilter<"Type">
    categories?: CategoryListRelationFilter
  }, "id">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    secondaryName?: SortOrder
    totalCount?: SortOrder
    children?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    key?: StringWithAggregatesFilter<"Type"> | string
    name?: JsonWithAggregatesFilter<"Type">
    secondaryName?: JsonWithAggregatesFilter<"Type">
    totalCount?: IntWithAggregatesFilter<"Type"> | number
    children?: JsonWithAggregatesFilter<"Type">
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    area?: JsonFilter<"Address">
    house?: JsonFilter<"Address">
    geoLocation?: JsonFilter<"Address">
    fullAddress?: JsonFilter<"Address">
    metros?: JsonFilter<"Address">
    addressRouteKey?: StringFilter<"Address"> | string
    addressTypeKey?: StringFilter<"Address"> | string
    districtId?: IntNullableFilter<"Address"> | number | null
    regionId?: IntNullableFilter<"Address"> | number | null
    district?: XOR<DistrictNullableRelationFilter, DistrictWhereInput> | null
    region?: XOR<RegionNullableRelationFilter, RegionWhereInput> | null
    properties?: PropertyListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    area?: SortOrder
    house?: SortOrder
    geoLocation?: SortOrder
    fullAddress?: SortOrder
    metros?: SortOrder
    addressRouteKey?: SortOrder
    addressTypeKey?: SortOrder
    districtId?: SortOrderInput | SortOrder
    regionId?: SortOrderInput | SortOrder
    district?: DistrictOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    area?: JsonFilter<"Address">
    house?: JsonFilter<"Address">
    geoLocation?: JsonFilter<"Address">
    fullAddress?: JsonFilter<"Address">
    metros?: JsonFilter<"Address">
    addressRouteKey?: StringFilter<"Address"> | string
    addressTypeKey?: StringFilter<"Address"> | string
    districtId?: IntNullableFilter<"Address"> | number | null
    regionId?: IntNullableFilter<"Address"> | number | null
    district?: XOR<DistrictNullableRelationFilter, DistrictWhereInput> | null
    region?: XOR<RegionNullableRelationFilter, RegionWhereInput> | null
    properties?: PropertyListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    area?: SortOrder
    house?: SortOrder
    geoLocation?: SortOrder
    fullAddress?: SortOrder
    metros?: SortOrder
    addressRouteKey?: SortOrder
    addressTypeKey?: SortOrder
    districtId?: SortOrderInput | SortOrder
    regionId?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    area?: JsonWithAggregatesFilter<"Address">
    house?: JsonWithAggregatesFilter<"Address">
    geoLocation?: JsonWithAggregatesFilter<"Address">
    fullAddress?: JsonWithAggregatesFilter<"Address">
    metros?: JsonWithAggregatesFilter<"Address">
    addressRouteKey?: StringWithAggregatesFilter<"Address"> | string
    addressTypeKey?: StringWithAggregatesFilter<"Address"> | string
    districtId?: IntNullableWithAggregatesFilter<"Address"> | number | null
    regionId?: IntNullableWithAggregatesFilter<"Address"> | number | null
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    addresses?: AddressListRelationFilter
    districts?: DistrictListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    districts?: DistrictOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    addresses?: AddressListRelationFilter
    districts?: DistrictListRelationFilter
  }, "id" | "name">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    regionId?: IntFilter<"District"> | number
    addresses?: AddressListRelationFilter
    regions?: XOR<RegionRelationFilter, RegionWhereInput>
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    regions?: RegionOrderByWithRelationInput
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    name?: StringFilter<"District"> | string
    regionId?: IntFilter<"District"> | number
    addresses?: AddressListRelationFilter
    regions?: XOR<RegionRelationFilter, RegionWhereInput>
  }, "id">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _avg?: DistrictAvgOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
    _sum?: DistrictSumOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"District"> | number
    name?: StringWithAggregatesFilter<"District"> | string
    regionId?: IntWithAggregatesFilter<"District"> | number
  }

  export type ImageSetWhereInput = {
    AND?: ImageSetWhereInput | ImageSetWhereInput[]
    OR?: ImageSetWhereInput[]
    NOT?: ImageSetWhereInput | ImageSetWhereInput[]
    id?: IntFilter<"ImageSet"> | number
    images?: JsonFilter<"ImageSet">
    properties?: PropertyListRelationFilter
  }

  export type ImageSetOrderByWithRelationInput = {
    id?: SortOrder
    images?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type ImageSetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageSetWhereInput | ImageSetWhereInput[]
    OR?: ImageSetWhereInput[]
    NOT?: ImageSetWhereInput | ImageSetWhereInput[]
    images?: JsonFilter<"ImageSet">
    properties?: PropertyListRelationFilter
  }, "id">

  export type ImageSetOrderByWithAggregationInput = {
    id?: SortOrder
    images?: SortOrder
    _count?: ImageSetCountOrderByAggregateInput
    _avg?: ImageSetAvgOrderByAggregateInput
    _max?: ImageSetMaxOrderByAggregateInput
    _min?: ImageSetMinOrderByAggregateInput
    _sum?: ImageSetSumOrderByAggregateInput
  }

  export type ImageSetScalarWhereWithAggregatesInput = {
    AND?: ImageSetScalarWhereWithAggregatesInput | ImageSetScalarWhereWithAggregatesInput[]
    OR?: ImageSetScalarWhereWithAggregatesInput[]
    NOT?: ImageSetScalarWhereWithAggregatesInput | ImageSetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageSet"> | number
    images?: JsonWithAggregatesFilter<"ImageSet">
  }

  export type GeneralAttributesWhereInput = {
    AND?: GeneralAttributesWhereInput | GeneralAttributesWhereInput[]
    OR?: GeneralAttributesWhereInput[]
    NOT?: GeneralAttributesWhereInput | GeneralAttributesWhereInput[]
    id?: IntFilter<"GeneralAttributes"> | number
    attributes?: JsonFilter<"GeneralAttributes">
    properties?: PropertyListRelationFilter
  }

  export type GeneralAttributesOrderByWithRelationInput = {
    id?: SortOrder
    attributes?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type GeneralAttributesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneralAttributesWhereInput | GeneralAttributesWhereInput[]
    OR?: GeneralAttributesWhereInput[]
    NOT?: GeneralAttributesWhereInput | GeneralAttributesWhereInput[]
    attributes?: JsonFilter<"GeneralAttributes">
    properties?: PropertyListRelationFilter
  }, "id">

  export type GeneralAttributesOrderByWithAggregationInput = {
    id?: SortOrder
    attributes?: SortOrder
    _count?: GeneralAttributesCountOrderByAggregateInput
    _avg?: GeneralAttributesAvgOrderByAggregateInput
    _max?: GeneralAttributesMaxOrderByAggregateInput
    _min?: GeneralAttributesMinOrderByAggregateInput
    _sum?: GeneralAttributesSumOrderByAggregateInput
  }

  export type GeneralAttributesScalarWhereWithAggregatesInput = {
    AND?: GeneralAttributesScalarWhereWithAggregatesInput | GeneralAttributesScalarWhereWithAggregatesInput[]
    OR?: GeneralAttributesScalarWhereWithAggregatesInput[]
    NOT?: GeneralAttributesScalarWhereWithAggregatesInput | GeneralAttributesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GeneralAttributes"> | number
    attributes?: JsonWithAggregatesFilter<"GeneralAttributes">
  }

  export type PropertyOwnerCreateInput = {
    firstName: string
    lastName: string
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyCreateNestedManyWithoutPropertyOwnerInput
    role: RoleCreateNestedOneWithoutPropertyOwnersInput
  }

  export type PropertyOwnerUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    roleId: number
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedCreateNestedManyWithoutPropertyOwnerInput
  }

  export type PropertyOwnerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyUpdateManyWithoutPropertyOwnerNestedInput
    role?: RoleUpdateOneRequiredWithoutPropertyOwnersNestedInput
  }

  export type PropertyOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput
  }

  export type PropertyOwnerCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    roleId: number
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyOwnerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RoleCreateInput = {
    key: string
    name: JsonNullValueInput | InputJsonValue
    propertyOwners?: PropertyOwnerCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    key: string
    name: JsonNullValueInput | InputJsonValue
    propertyOwners?: PropertyOwnerUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    propertyOwners?: PropertyOwnerUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    propertyOwners?: PropertyOwnerUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    key: string
    name: JsonNullValueInput | InputJsonValue
  }

  export type RoleUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
  }

  export type PropertyCreateInput = {
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    generalAttributes: GeneralAttributesCreateNestedOneWithoutPropertiesInput
    imageSet: ImageSetCreateNestedOneWithoutPropertiesInput
    propertyOwner: PropertyOwnerCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    generalAttributes?: GeneralAttributesUpdateOneRequiredWithoutPropertiesNestedInput
    imageSet?: ImageSetUpdateOneRequiredWithoutPropertiesNestedInput
    propertyOwner?: PropertyOwnerUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyCreateManyInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateManyMutationInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    name: JsonNullValueInput | InputJsonValue
    type: TypeCreateNestedOneWithoutCategoriesInput
    properties?: PropertyCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    typeId: number
    name: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: JsonNullValueInput | InputJsonValue
    type?: TypeUpdateOneRequiredWithoutCategoriesNestedInput
    properties?: PropertyUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    name?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    typeId: number
    name: JsonNullValueInput | InputJsonValue
  }

  export type CategoryUpdateManyMutationInput = {
    name?: JsonNullValueInput | InputJsonValue
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    name?: JsonNullValueInput | InputJsonValue
  }

  export type TypeCreateInput = {
    key: string
    name: JsonNullValueInput | InputJsonValue
    secondaryName: JsonNullValueInput | InputJsonValue
    totalCount: number
    children: JsonNullValueInput | InputJsonValue
    categories?: CategoryCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    id?: number
    key: string
    name: JsonNullValueInput | InputJsonValue
    secondaryName: JsonNullValueInput | InputJsonValue
    totalCount: number
    children: JsonNullValueInput | InputJsonValue
    categories?: CategoryUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    secondaryName?: JsonNullValueInput | InputJsonValue
    totalCount?: IntFieldUpdateOperationsInput | number
    children?: JsonNullValueInput | InputJsonValue
    categories?: CategoryUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    secondaryName?: JsonNullValueInput | InputJsonValue
    totalCount?: IntFieldUpdateOperationsInput | number
    children?: JsonNullValueInput | InputJsonValue
    categories?: CategoryUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    id?: number
    key: string
    name: JsonNullValueInput | InputJsonValue
    secondaryName: JsonNullValueInput | InputJsonValue
    totalCount: number
    children: JsonNullValueInput | InputJsonValue
  }

  export type TypeUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    secondaryName?: JsonNullValueInput | InputJsonValue
    totalCount?: IntFieldUpdateOperationsInput | number
    children?: JsonNullValueInput | InputJsonValue
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    secondaryName?: JsonNullValueInput | InputJsonValue
    totalCount?: IntFieldUpdateOperationsInput | number
    children?: JsonNullValueInput | InputJsonValue
  }

  export type AddressCreateInput = {
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    district?: DistrictCreateNestedOneWithoutAddressesInput
    region?: RegionCreateNestedOneWithoutAddressesInput
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    districtId?: number | null
    regionId?: number | null
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateOneWithoutAddressesNestedInput
    region?: RegionUpdateOneWithoutAddressesNestedInput
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    regionId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    districtId?: number | null
    regionId?: number | null
  }

  export type AddressUpdateManyMutationInput = {
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    regionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RegionCreateInput = {
    name: string
    addresses?: AddressCreateNestedManyWithoutRegionInput
    districts?: DistrictCreateNestedManyWithoutRegionsInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    addresses?: AddressUncheckedCreateNestedManyWithoutRegionInput
    districts?: DistrictUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUpdateManyWithoutRegionNestedInput
    districts?: DistrictUpdateManyWithoutRegionsNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUncheckedUpdateManyWithoutRegionNestedInput
    districts?: DistrictUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictCreateInput = {
    name: string
    addresses?: AddressCreateNestedManyWithoutDistrictInput
    regions: RegionCreateNestedOneWithoutDistrictsInput
  }

  export type DistrictUncheckedCreateInput = {
    id?: number
    name: string
    regionId: number
    addresses?: AddressUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUpdateManyWithoutDistrictNestedInput
    regions?: RegionUpdateOneRequiredWithoutDistrictsNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
    addresses?: AddressUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id?: number
    name: string
    regionId: number
  }

  export type DistrictUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageSetCreateInput = {
    images: JsonNullValueInput | InputJsonValue
    properties?: PropertyCreateNestedManyWithoutImageSetInput
  }

  export type ImageSetUncheckedCreateInput = {
    id?: number
    images: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedCreateNestedManyWithoutImageSetInput
  }

  export type ImageSetUpdateInput = {
    images?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUpdateManyWithoutImageSetNestedInput
  }

  export type ImageSetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    images?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedUpdateManyWithoutImageSetNestedInput
  }

  export type ImageSetCreateManyInput = {
    id?: number
    images: JsonNullValueInput | InputJsonValue
  }

  export type ImageSetUpdateManyMutationInput = {
    images?: JsonNullValueInput | InputJsonValue
  }

  export type ImageSetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    images?: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesCreateInput = {
    attributes: JsonNullValueInput | InputJsonValue
    properties?: PropertyCreateNestedManyWithoutGeneralAttributesInput
  }

  export type GeneralAttributesUncheckedCreateInput = {
    id?: number
    attributes: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedCreateNestedManyWithoutGeneralAttributesInput
  }

  export type GeneralAttributesUpdateInput = {
    attributes?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUpdateManyWithoutGeneralAttributesNestedInput
  }

  export type GeneralAttributesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedUpdateManyWithoutGeneralAttributesNestedInput
  }

  export type GeneralAttributesCreateManyInput = {
    id?: number
    attributes: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesUpdateManyMutationInput = {
    attributes?: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    roleId?: SortOrder
    avatarUrl?: SortOrder
    avatarSet?: SortOrder
  }

  export type PropertyOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type PropertyOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    roleId?: SortOrder
    avatarUrl?: SortOrder
  }

  export type PropertyOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    roleId?: SortOrder
    avatarUrl?: SortOrder
  }

  export type PropertyOwnerSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PropertyOwnerListRelationFilter = {
    every?: PropertyOwnerWhereInput
    some?: PropertyOwnerWhereInput
    none?: PropertyOwnerWhereInput
  }

  export type PropertyOwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type GeneralAttributesRelationFilter = {
    is?: GeneralAttributesWhereInput
    isNot?: GeneralAttributesWhereInput
  }

  export type ImageSetRelationFilter = {
    is?: ImageSetWhereInput
    isNot?: ImageSetWhereInput
  }

  export type PropertyOwnerRelationFilter = {
    is?: PropertyOwnerWhereInput
    isNot?: PropertyOwnerWhereInput
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    viewName?: SortOrder
    boardName?: SortOrder
    categoryId?: SortOrder
    statusKey?: SortOrder
    routeKey?: SortOrder
    price?: SortOrder
    priceByUnit?: SortOrder
    unit?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    addressId?: SortOrder
    phone?: SortOrder
    videoLink?: SortOrder
    viewCount?: SortOrder
    isCommissioned?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    addressId?: SortOrder
    viewCount?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    statusKey?: SortOrder
    routeKey?: SortOrder
    unit?: SortOrder
    currency?: SortOrder
    addressId?: SortOrder
    phone?: SortOrder
    videoLink?: SortOrder
    viewCount?: SortOrder
    isCommissioned?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    statusKey?: SortOrder
    routeKey?: SortOrder
    unit?: SortOrder
    currency?: SortOrder
    addressId?: SortOrder
    phone?: SortOrder
    videoLink?: SortOrder
    viewCount?: SortOrder
    isCommissioned?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
    isFavorite?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    publishedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    addressId?: SortOrder
    viewCount?: SortOrder
    imageSetsId?: SortOrder
    generalAttributesId?: SortOrder
    propertyOwnerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TypeRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    secondaryName?: SortOrder
    totalCount?: SortOrder
    children?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    totalCount?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    totalCount?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DistrictNullableRelationFilter = {
    is?: DistrictWhereInput | null
    isNot?: DistrictWhereInput | null
  }

  export type RegionNullableRelationFilter = {
    is?: RegionWhereInput | null
    isNot?: RegionWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    house?: SortOrder
    geoLocation?: SortOrder
    fullAddress?: SortOrder
    metros?: SortOrder
    addressRouteKey?: SortOrder
    addressTypeKey?: SortOrder
    districtId?: SortOrder
    regionId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
    regionId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    addressRouteKey?: SortOrder
    addressTypeKey?: SortOrder
    districtId?: SortOrder
    regionId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    addressRouteKey?: SortOrder
    addressTypeKey?: SortOrder
    districtId?: SortOrder
    regionId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    districtId?: SortOrder
    regionId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type DistrictListRelationFilter = {
    every?: DistrictWhereInput
    some?: DistrictWhereInput
    none?: DistrictWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
  }

  export type DistrictAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    regionId?: SortOrder
  }

  export type DistrictSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
  }

  export type ImageSetCountOrderByAggregateInput = {
    id?: SortOrder
    images?: SortOrder
  }

  export type ImageSetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageSetMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageSetMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageSetSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneralAttributesCountOrderByAggregateInput = {
    id?: SortOrder
    attributes?: SortOrder
  }

  export type GeneralAttributesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneralAttributesMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneralAttributesMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneralAttributesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutPropertyOwnerInput = {
    create?: XOR<PropertyCreateWithoutPropertyOwnerInput, PropertyUncheckedCreateWithoutPropertyOwnerInput> | PropertyCreateWithoutPropertyOwnerInput[] | PropertyUncheckedCreateWithoutPropertyOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyOwnerInput | PropertyCreateOrConnectWithoutPropertyOwnerInput[]
    createMany?: PropertyCreateManyPropertyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutPropertyOwnersInput = {
    create?: XOR<RoleCreateWithoutPropertyOwnersInput, RoleUncheckedCreateWithoutPropertyOwnersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPropertyOwnersInput
    connect?: RoleWhereUniqueInput
  }

  export type PropertyUncheckedCreateNestedManyWithoutPropertyOwnerInput = {
    create?: XOR<PropertyCreateWithoutPropertyOwnerInput, PropertyUncheckedCreateWithoutPropertyOwnerInput> | PropertyCreateWithoutPropertyOwnerInput[] | PropertyUncheckedCreateWithoutPropertyOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyOwnerInput | PropertyCreateOrConnectWithoutPropertyOwnerInput[]
    createMany?: PropertyCreateManyPropertyOwnerInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PropertyUpdateManyWithoutPropertyOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyOwnerInput, PropertyUncheckedCreateWithoutPropertyOwnerInput> | PropertyCreateWithoutPropertyOwnerInput[] | PropertyUncheckedCreateWithoutPropertyOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyOwnerInput | PropertyCreateOrConnectWithoutPropertyOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput | PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput[]
    createMany?: PropertyCreateManyPropertyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput | PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutPropertyOwnerInput | PropertyUpdateManyWithWhereWithoutPropertyOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutPropertyOwnersNestedInput = {
    create?: XOR<RoleCreateWithoutPropertyOwnersInput, RoleUncheckedCreateWithoutPropertyOwnersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPropertyOwnersInput
    upsert?: RoleUpsertWithoutPropertyOwnersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPropertyOwnersInput, RoleUpdateWithoutPropertyOwnersInput>, RoleUncheckedUpdateWithoutPropertyOwnersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyOwnerInput, PropertyUncheckedCreateWithoutPropertyOwnerInput> | PropertyCreateWithoutPropertyOwnerInput[] | PropertyUncheckedCreateWithoutPropertyOwnerInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyOwnerInput | PropertyCreateOrConnectWithoutPropertyOwnerInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput | PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput[]
    createMany?: PropertyCreateManyPropertyOwnerInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput | PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutPropertyOwnerInput | PropertyUpdateManyWithWhereWithoutPropertyOwnerInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyOwnerCreateNestedManyWithoutRoleInput = {
    create?: XOR<PropertyOwnerCreateWithoutRoleInput, PropertyOwnerUncheckedCreateWithoutRoleInput> | PropertyOwnerCreateWithoutRoleInput[] | PropertyOwnerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutRoleInput | PropertyOwnerCreateOrConnectWithoutRoleInput[]
    createMany?: PropertyOwnerCreateManyRoleInputEnvelope
    connect?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
  }

  export type PropertyOwnerUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<PropertyOwnerCreateWithoutRoleInput, PropertyOwnerUncheckedCreateWithoutRoleInput> | PropertyOwnerCreateWithoutRoleInput[] | PropertyOwnerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutRoleInput | PropertyOwnerCreateOrConnectWithoutRoleInput[]
    createMany?: PropertyOwnerCreateManyRoleInputEnvelope
    connect?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
  }

  export type PropertyOwnerUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PropertyOwnerCreateWithoutRoleInput, PropertyOwnerUncheckedCreateWithoutRoleInput> | PropertyOwnerCreateWithoutRoleInput[] | PropertyOwnerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutRoleInput | PropertyOwnerCreateOrConnectWithoutRoleInput[]
    upsert?: PropertyOwnerUpsertWithWhereUniqueWithoutRoleInput | PropertyOwnerUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PropertyOwnerCreateManyRoleInputEnvelope
    set?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    disconnect?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    delete?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    connect?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    update?: PropertyOwnerUpdateWithWhereUniqueWithoutRoleInput | PropertyOwnerUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PropertyOwnerUpdateManyWithWhereWithoutRoleInput | PropertyOwnerUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PropertyOwnerScalarWhereInput | PropertyOwnerScalarWhereInput[]
  }

  export type PropertyOwnerUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<PropertyOwnerCreateWithoutRoleInput, PropertyOwnerUncheckedCreateWithoutRoleInput> | PropertyOwnerCreateWithoutRoleInput[] | PropertyOwnerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutRoleInput | PropertyOwnerCreateOrConnectWithoutRoleInput[]
    upsert?: PropertyOwnerUpsertWithWhereUniqueWithoutRoleInput | PropertyOwnerUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: PropertyOwnerCreateManyRoleInputEnvelope
    set?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    disconnect?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    delete?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    connect?: PropertyOwnerWhereUniqueInput | PropertyOwnerWhereUniqueInput[]
    update?: PropertyOwnerUpdateWithWhereUniqueWithoutRoleInput | PropertyOwnerUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: PropertyOwnerUpdateManyWithWhereWithoutRoleInput | PropertyOwnerUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: PropertyOwnerScalarWhereInput | PropertyOwnerScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertiesInput
    connect?: AddressWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPropertiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type GeneralAttributesCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<GeneralAttributesCreateWithoutPropertiesInput, GeneralAttributesUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: GeneralAttributesCreateOrConnectWithoutPropertiesInput
    connect?: GeneralAttributesWhereUniqueInput
  }

  export type ImageSetCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<ImageSetCreateWithoutPropertiesInput, ImageSetUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ImageSetCreateOrConnectWithoutPropertiesInput
    connect?: ImageSetWhereUniqueInput
  }

  export type PropertyOwnerCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PropertyOwnerCreateWithoutPropertiesInput, PropertyOwnerUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutPropertiesInput
    connect?: PropertyOwnerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AddressUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPropertiesInput
    upsert?: AddressUpsertWithoutPropertiesInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPropertiesInput, AddressUpdateWithoutPropertiesInput>, AddressUncheckedUpdateWithoutPropertiesInput>
  }

  export type CategoryUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPropertiesInput
    upsert?: CategoryUpsertWithoutPropertiesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPropertiesInput, CategoryUpdateWithoutPropertiesInput>, CategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type GeneralAttributesUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<GeneralAttributesCreateWithoutPropertiesInput, GeneralAttributesUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: GeneralAttributesCreateOrConnectWithoutPropertiesInput
    upsert?: GeneralAttributesUpsertWithoutPropertiesInput
    connect?: GeneralAttributesWhereUniqueInput
    update?: XOR<XOR<GeneralAttributesUpdateToOneWithWhereWithoutPropertiesInput, GeneralAttributesUpdateWithoutPropertiesInput>, GeneralAttributesUncheckedUpdateWithoutPropertiesInput>
  }

  export type ImageSetUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<ImageSetCreateWithoutPropertiesInput, ImageSetUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: ImageSetCreateOrConnectWithoutPropertiesInput
    upsert?: ImageSetUpsertWithoutPropertiesInput
    connect?: ImageSetWhereUniqueInput
    update?: XOR<XOR<ImageSetUpdateToOneWithWhereWithoutPropertiesInput, ImageSetUpdateWithoutPropertiesInput>, ImageSetUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyOwnerUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<PropertyOwnerCreateWithoutPropertiesInput, PropertyOwnerUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyOwnerCreateOrConnectWithoutPropertiesInput
    upsert?: PropertyOwnerUpsertWithoutPropertiesInput
    connect?: PropertyOwnerWhereUniqueInput
    update?: XOR<XOR<PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput, PropertyOwnerUpdateWithoutPropertiesInput>, PropertyOwnerUncheckedUpdateWithoutPropertiesInput>
  }

  export type TypeCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TypeCreateWithoutCategoriesInput, TypeUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TypeCreateOrConnectWithoutCategoriesInput
    connect?: TypeWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type TypeUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TypeCreateWithoutCategoriesInput, TypeUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TypeCreateOrConnectWithoutCategoriesInput
    upsert?: TypeUpsertWithoutCategoriesInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutCategoriesInput, TypeUpdateWithoutCategoriesInput>, TypeUncheckedUpdateWithoutCategoriesInput>
  }

  export type PropertyUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutTypeInput = {
    create?: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput> | CategoryCreateWithoutTypeInput[] | CategoryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeInput | CategoryCreateOrConnectWithoutTypeInput[]
    createMany?: CategoryCreateManyTypeInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput> | CategoryCreateWithoutTypeInput[] | CategoryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeInput | CategoryCreateOrConnectWithoutTypeInput[]
    createMany?: CategoryCreateManyTypeInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutTypeNestedInput = {
    create?: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput> | CategoryCreateWithoutTypeInput[] | CategoryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeInput | CategoryCreateOrConnectWithoutTypeInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTypeInput | CategoryUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: CategoryCreateManyTypeInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTypeInput | CategoryUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTypeInput | CategoryUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput> | CategoryCreateWithoutTypeInput[] | CategoryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTypeInput | CategoryCreateOrConnectWithoutTypeInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTypeInput | CategoryUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: CategoryCreateManyTypeInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTypeInput | CategoryUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTypeInput | CategoryUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type DistrictCreateNestedOneWithoutAddressesInput = {
    create?: XOR<DistrictCreateWithoutAddressesInput, DistrictUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutAddressesInput
    connect?: DistrictWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutAddressesInput = {
    create?: XOR<RegionCreateWithoutAddressesInput, RegionUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutAddressesInput
    connect?: RegionWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutAddressInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type DistrictUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<DistrictCreateWithoutAddressesInput, DistrictUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutAddressesInput
    upsert?: DistrictUpsertWithoutAddressesInput
    disconnect?: DistrictWhereInput | boolean
    delete?: DistrictWhereInput | boolean
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutAddressesInput, DistrictUpdateWithoutAddressesInput>, DistrictUncheckedUpdateWithoutAddressesInput>
  }

  export type RegionUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<RegionCreateWithoutAddressesInput, RegionUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutAddressesInput
    upsert?: RegionUpsertWithoutAddressesInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutAddressesInput, RegionUpdateWithoutAddressesInput>, RegionUncheckedUpdateWithoutAddressesInput>
  }

  export type PropertyUpdateManyWithoutAddressNestedInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAddressInput | PropertyUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAddressInput | PropertyUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAddressInput | PropertyUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput> | PropertyCreateWithoutAddressInput[] | PropertyUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutAddressInput | PropertyCreateOrConnectWithoutAddressInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutAddressInput | PropertyUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: PropertyCreateManyAddressInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutAddressInput | PropertyUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutAddressInput | PropertyUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type AddressCreateNestedManyWithoutRegionInput = {
    create?: XOR<AddressCreateWithoutRegionInput, AddressUncheckedCreateWithoutRegionInput> | AddressCreateWithoutRegionInput[] | AddressUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutRegionInput | AddressCreateOrConnectWithoutRegionInput[]
    createMany?: AddressCreateManyRegionInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type DistrictCreateNestedManyWithoutRegionsInput = {
    create?: XOR<DistrictCreateWithoutRegionsInput, DistrictUncheckedCreateWithoutRegionsInput> | DistrictCreateWithoutRegionsInput[] | DistrictUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutRegionsInput | DistrictCreateOrConnectWithoutRegionsInput[]
    createMany?: DistrictCreateManyRegionsInputEnvelope
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<AddressCreateWithoutRegionInput, AddressUncheckedCreateWithoutRegionInput> | AddressCreateWithoutRegionInput[] | AddressUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutRegionInput | AddressCreateOrConnectWithoutRegionInput[]
    createMany?: AddressCreateManyRegionInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type DistrictUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<DistrictCreateWithoutRegionsInput, DistrictUncheckedCreateWithoutRegionsInput> | DistrictCreateWithoutRegionsInput[] | DistrictUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutRegionsInput | DistrictCreateOrConnectWithoutRegionsInput[]
    createMany?: DistrictCreateManyRegionsInputEnvelope
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
  }

  export type AddressUpdateManyWithoutRegionNestedInput = {
    create?: XOR<AddressCreateWithoutRegionInput, AddressUncheckedCreateWithoutRegionInput> | AddressCreateWithoutRegionInput[] | AddressUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutRegionInput | AddressCreateOrConnectWithoutRegionInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutRegionInput | AddressUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: AddressCreateManyRegionInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutRegionInput | AddressUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutRegionInput | AddressUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type DistrictUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<DistrictCreateWithoutRegionsInput, DistrictUncheckedCreateWithoutRegionsInput> | DistrictCreateWithoutRegionsInput[] | DistrictUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutRegionsInput | DistrictCreateOrConnectWithoutRegionsInput[]
    upsert?: DistrictUpsertWithWhereUniqueWithoutRegionsInput | DistrictUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: DistrictCreateManyRegionsInputEnvelope
    set?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    disconnect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    delete?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    update?: DistrictUpdateWithWhereUniqueWithoutRegionsInput | DistrictUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: DistrictUpdateManyWithWhereWithoutRegionsInput | DistrictUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<AddressCreateWithoutRegionInput, AddressUncheckedCreateWithoutRegionInput> | AddressCreateWithoutRegionInput[] | AddressUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutRegionInput | AddressCreateOrConnectWithoutRegionInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutRegionInput | AddressUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: AddressCreateManyRegionInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutRegionInput | AddressUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutRegionInput | AddressUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type DistrictUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<DistrictCreateWithoutRegionsInput, DistrictUncheckedCreateWithoutRegionsInput> | DistrictCreateWithoutRegionsInput[] | DistrictUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutRegionsInput | DistrictCreateOrConnectWithoutRegionsInput[]
    upsert?: DistrictUpsertWithWhereUniqueWithoutRegionsInput | DistrictUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: DistrictCreateManyRegionsInputEnvelope
    set?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    disconnect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    delete?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    update?: DistrictUpdateWithWhereUniqueWithoutRegionsInput | DistrictUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: DistrictUpdateManyWithWhereWithoutRegionsInput | DistrictUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
  }

  export type AddressCreateNestedManyWithoutDistrictInput = {
    create?: XOR<AddressCreateWithoutDistrictInput, AddressUncheckedCreateWithoutDistrictInput> | AddressCreateWithoutDistrictInput[] | AddressUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutDistrictInput | AddressCreateOrConnectWithoutDistrictInput[]
    createMany?: AddressCreateManyDistrictInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type RegionCreateNestedOneWithoutDistrictsInput = {
    create?: XOR<RegionCreateWithoutDistrictsInput, RegionUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutDistrictsInput
    connect?: RegionWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<AddressCreateWithoutDistrictInput, AddressUncheckedCreateWithoutDistrictInput> | AddressCreateWithoutDistrictInput[] | AddressUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutDistrictInput | AddressCreateOrConnectWithoutDistrictInput[]
    createMany?: AddressCreateManyDistrictInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type AddressUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<AddressCreateWithoutDistrictInput, AddressUncheckedCreateWithoutDistrictInput> | AddressCreateWithoutDistrictInput[] | AddressUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutDistrictInput | AddressCreateOrConnectWithoutDistrictInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutDistrictInput | AddressUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: AddressCreateManyDistrictInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutDistrictInput | AddressUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutDistrictInput | AddressUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type RegionUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: XOR<RegionCreateWithoutDistrictsInput, RegionUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutDistrictsInput
    upsert?: RegionUpsertWithoutDistrictsInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutDistrictsInput, RegionUpdateWithoutDistrictsInput>, RegionUncheckedUpdateWithoutDistrictsInput>
  }

  export type AddressUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<AddressCreateWithoutDistrictInput, AddressUncheckedCreateWithoutDistrictInput> | AddressCreateWithoutDistrictInput[] | AddressUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutDistrictInput | AddressCreateOrConnectWithoutDistrictInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutDistrictInput | AddressUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: AddressCreateManyDistrictInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutDistrictInput | AddressUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutDistrictInput | AddressUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutImageSetInput = {
    create?: XOR<PropertyCreateWithoutImageSetInput, PropertyUncheckedCreateWithoutImageSetInput> | PropertyCreateWithoutImageSetInput[] | PropertyUncheckedCreateWithoutImageSetInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutImageSetInput | PropertyCreateOrConnectWithoutImageSetInput[]
    createMany?: PropertyCreateManyImageSetInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutImageSetInput = {
    create?: XOR<PropertyCreateWithoutImageSetInput, PropertyUncheckedCreateWithoutImageSetInput> | PropertyCreateWithoutImageSetInput[] | PropertyUncheckedCreateWithoutImageSetInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutImageSetInput | PropertyCreateOrConnectWithoutImageSetInput[]
    createMany?: PropertyCreateManyImageSetInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutImageSetNestedInput = {
    create?: XOR<PropertyCreateWithoutImageSetInput, PropertyUncheckedCreateWithoutImageSetInput> | PropertyCreateWithoutImageSetInput[] | PropertyUncheckedCreateWithoutImageSetInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutImageSetInput | PropertyCreateOrConnectWithoutImageSetInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutImageSetInput | PropertyUpsertWithWhereUniqueWithoutImageSetInput[]
    createMany?: PropertyCreateManyImageSetInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutImageSetInput | PropertyUpdateWithWhereUniqueWithoutImageSetInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutImageSetInput | PropertyUpdateManyWithWhereWithoutImageSetInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutImageSetNestedInput = {
    create?: XOR<PropertyCreateWithoutImageSetInput, PropertyUncheckedCreateWithoutImageSetInput> | PropertyCreateWithoutImageSetInput[] | PropertyUncheckedCreateWithoutImageSetInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutImageSetInput | PropertyCreateOrConnectWithoutImageSetInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutImageSetInput | PropertyUpsertWithWhereUniqueWithoutImageSetInput[]
    createMany?: PropertyCreateManyImageSetInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutImageSetInput | PropertyUpdateWithWhereUniqueWithoutImageSetInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutImageSetInput | PropertyUpdateManyWithWhereWithoutImageSetInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCreateNestedManyWithoutGeneralAttributesInput = {
    create?: XOR<PropertyCreateWithoutGeneralAttributesInput, PropertyUncheckedCreateWithoutGeneralAttributesInput> | PropertyCreateWithoutGeneralAttributesInput[] | PropertyUncheckedCreateWithoutGeneralAttributesInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGeneralAttributesInput | PropertyCreateOrConnectWithoutGeneralAttributesInput[]
    createMany?: PropertyCreateManyGeneralAttributesInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutGeneralAttributesInput = {
    create?: XOR<PropertyCreateWithoutGeneralAttributesInput, PropertyUncheckedCreateWithoutGeneralAttributesInput> | PropertyCreateWithoutGeneralAttributesInput[] | PropertyUncheckedCreateWithoutGeneralAttributesInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGeneralAttributesInput | PropertyCreateOrConnectWithoutGeneralAttributesInput[]
    createMany?: PropertyCreateManyGeneralAttributesInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutGeneralAttributesNestedInput = {
    create?: XOR<PropertyCreateWithoutGeneralAttributesInput, PropertyUncheckedCreateWithoutGeneralAttributesInput> | PropertyCreateWithoutGeneralAttributesInput[] | PropertyUncheckedCreateWithoutGeneralAttributesInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGeneralAttributesInput | PropertyCreateOrConnectWithoutGeneralAttributesInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutGeneralAttributesInput | PropertyUpsertWithWhereUniqueWithoutGeneralAttributesInput[]
    createMany?: PropertyCreateManyGeneralAttributesInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutGeneralAttributesInput | PropertyUpdateWithWhereUniqueWithoutGeneralAttributesInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutGeneralAttributesInput | PropertyUpdateManyWithWhereWithoutGeneralAttributesInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutGeneralAttributesNestedInput = {
    create?: XOR<PropertyCreateWithoutGeneralAttributesInput, PropertyUncheckedCreateWithoutGeneralAttributesInput> | PropertyCreateWithoutGeneralAttributesInput[] | PropertyUncheckedCreateWithoutGeneralAttributesInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutGeneralAttributesInput | PropertyCreateOrConnectWithoutGeneralAttributesInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutGeneralAttributesInput | PropertyUpsertWithWhereUniqueWithoutGeneralAttributesInput[]
    createMany?: PropertyCreateManyGeneralAttributesInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutGeneralAttributesInput | PropertyUpdateWithWhereUniqueWithoutGeneralAttributesInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutGeneralAttributesInput | PropertyUpdateManyWithWhereWithoutGeneralAttributesInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PropertyCreateWithoutPropertyOwnerInput = {
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    generalAttributes: GeneralAttributesCreateNestedOneWithoutPropertiesInput
    imageSet: ImageSetCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutPropertyOwnerInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyCreateOrConnectWithoutPropertyOwnerInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyOwnerInput, PropertyUncheckedCreateWithoutPropertyOwnerInput>
  }

  export type PropertyCreateManyPropertyOwnerInputEnvelope = {
    data: PropertyCreateManyPropertyOwnerInput | PropertyCreateManyPropertyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutPropertyOwnersInput = {
    key: string
    name: JsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedCreateWithoutPropertyOwnersInput = {
    id?: number
    key: string
    name: JsonNullValueInput | InputJsonValue
  }

  export type RoleCreateOrConnectWithoutPropertyOwnersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPropertyOwnersInput, RoleUncheckedCreateWithoutPropertyOwnersInput>
  }

  export type PropertyUpsertWithWhereUniqueWithoutPropertyOwnerInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutPropertyOwnerInput, PropertyUncheckedUpdateWithoutPropertyOwnerInput>
    create: XOR<PropertyCreateWithoutPropertyOwnerInput, PropertyUncheckedCreateWithoutPropertyOwnerInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutPropertyOwnerInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutPropertyOwnerInput, PropertyUncheckedUpdateWithoutPropertyOwnerInput>
  }

  export type PropertyUpdateManyWithWhereWithoutPropertyOwnerInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutPropertyOwnerInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    viewName?: JsonFilter<"Property">
    boardName?: JsonFilter<"Property">
    categoryId?: IntFilter<"Property"> | number
    statusKey?: StringFilter<"Property"> | string
    routeKey?: StringFilter<"Property"> | string
    price?: JsonFilter<"Property">
    priceByUnit?: JsonNullableFilter<"Property">
    unit?: StringFilter<"Property"> | string
    currency?: StringFilter<"Property"> | string
    description?: JsonFilter<"Property">
    addressId?: IntFilter<"Property"> | number
    phone?: StringFilter<"Property"> | string
    videoLink?: StringNullableFilter<"Property"> | string | null
    viewCount?: IntFilter<"Property"> | number
    isCommissioned?: BoolFilter<"Property"> | boolean
    imageSetsId?: IntFilter<"Property"> | number
    generalAttributesId?: IntFilter<"Property"> | number
    propertyOwnerId?: IntFilter<"Property"> | number
    isFavorite?: BoolFilter<"Property"> | boolean
    isHidden?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    publishedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
  }

  export type RoleUpsertWithoutPropertyOwnersInput = {
    update: XOR<RoleUpdateWithoutPropertyOwnersInput, RoleUncheckedUpdateWithoutPropertyOwnersInput>
    create: XOR<RoleCreateWithoutPropertyOwnersInput, RoleUncheckedCreateWithoutPropertyOwnersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPropertyOwnersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPropertyOwnersInput, RoleUncheckedUpdateWithoutPropertyOwnersInput>
  }

  export type RoleUpdateWithoutPropertyOwnersInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
  }

  export type RoleUncheckedUpdateWithoutPropertyOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
  }

  export type PropertyOwnerCreateWithoutRoleInput = {
    firstName: string
    lastName: string
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyCreateNestedManyWithoutPropertyOwnerInput
  }

  export type PropertyOwnerUncheckedCreateWithoutRoleInput = {
    id?: number
    firstName: string
    lastName: string
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedCreateNestedManyWithoutPropertyOwnerInput
  }

  export type PropertyOwnerCreateOrConnectWithoutRoleInput = {
    where: PropertyOwnerWhereUniqueInput
    create: XOR<PropertyOwnerCreateWithoutRoleInput, PropertyOwnerUncheckedCreateWithoutRoleInput>
  }

  export type PropertyOwnerCreateManyRoleInputEnvelope = {
    data: PropertyOwnerCreateManyRoleInput | PropertyOwnerCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type PropertyOwnerUpsertWithWhereUniqueWithoutRoleInput = {
    where: PropertyOwnerWhereUniqueInput
    update: XOR<PropertyOwnerUpdateWithoutRoleInput, PropertyOwnerUncheckedUpdateWithoutRoleInput>
    create: XOR<PropertyOwnerCreateWithoutRoleInput, PropertyOwnerUncheckedCreateWithoutRoleInput>
  }

  export type PropertyOwnerUpdateWithWhereUniqueWithoutRoleInput = {
    where: PropertyOwnerWhereUniqueInput
    data: XOR<PropertyOwnerUpdateWithoutRoleInput, PropertyOwnerUncheckedUpdateWithoutRoleInput>
  }

  export type PropertyOwnerUpdateManyWithWhereWithoutRoleInput = {
    where: PropertyOwnerScalarWhereInput
    data: XOR<PropertyOwnerUpdateManyMutationInput, PropertyOwnerUncheckedUpdateManyWithoutRoleInput>
  }

  export type PropertyOwnerScalarWhereInput = {
    AND?: PropertyOwnerScalarWhereInput | PropertyOwnerScalarWhereInput[]
    OR?: PropertyOwnerScalarWhereInput[]
    NOT?: PropertyOwnerScalarWhereInput | PropertyOwnerScalarWhereInput[]
    id?: IntFilter<"PropertyOwner"> | number
    firstName?: StringFilter<"PropertyOwner"> | string
    lastName?: StringFilter<"PropertyOwner"> | string
    roleId?: IntFilter<"PropertyOwner"> | number
    avatarUrl?: StringNullableFilter<"PropertyOwner"> | string | null
    avatarSet?: JsonNullableFilter<"PropertyOwner">
  }

  export type AddressCreateWithoutPropertiesInput = {
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    district?: DistrictCreateNestedOneWithoutAddressesInput
    region?: RegionCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateWithoutPropertiesInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    districtId?: number | null
    regionId?: number | null
  }

  export type AddressCreateOrConnectWithoutPropertiesInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
  }

  export type CategoryCreateWithoutPropertiesInput = {
    name: JsonNullValueInput | InputJsonValue
    type: TypeCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutPropertiesInput = {
    id?: number
    typeId: number
    name: JsonNullValueInput | InputJsonValue
  }

  export type CategoryCreateOrConnectWithoutPropertiesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
  }

  export type GeneralAttributesCreateWithoutPropertiesInput = {
    attributes: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesUncheckedCreateWithoutPropertiesInput = {
    id?: number
    attributes: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesCreateOrConnectWithoutPropertiesInput = {
    where: GeneralAttributesWhereUniqueInput
    create: XOR<GeneralAttributesCreateWithoutPropertiesInput, GeneralAttributesUncheckedCreateWithoutPropertiesInput>
  }

  export type ImageSetCreateWithoutPropertiesInput = {
    images: JsonNullValueInput | InputJsonValue
  }

  export type ImageSetUncheckedCreateWithoutPropertiesInput = {
    id?: number
    images: JsonNullValueInput | InputJsonValue
  }

  export type ImageSetCreateOrConnectWithoutPropertiesInput = {
    where: ImageSetWhereUniqueInput
    create: XOR<ImageSetCreateWithoutPropertiesInput, ImageSetUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyOwnerCreateWithoutPropertiesInput = {
    firstName: string
    lastName: string
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    role: RoleCreateNestedOneWithoutPropertyOwnersInput
  }

  export type PropertyOwnerUncheckedCreateWithoutPropertiesInput = {
    id?: number
    firstName: string
    lastName: string
    roleId: number
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyOwnerCreateOrConnectWithoutPropertiesInput = {
    where: PropertyOwnerWhereUniqueInput
    create: XOR<PropertyOwnerCreateWithoutPropertiesInput, PropertyOwnerUncheckedCreateWithoutPropertiesInput>
  }

  export type AddressUpsertWithoutPropertiesInput = {
    update: XOR<AddressUpdateWithoutPropertiesInput, AddressUncheckedUpdateWithoutPropertiesInput>
    create: XOR<AddressCreateWithoutPropertiesInput, AddressUncheckedCreateWithoutPropertiesInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutPropertiesInput, AddressUncheckedUpdateWithoutPropertiesInput>
  }

  export type AddressUpdateWithoutPropertiesInput = {
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateOneWithoutAddressesNestedInput
    region?: RegionUpdateOneWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    regionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryUpsertWithoutPropertiesInput = {
    update: XOR<CategoryUpdateWithoutPropertiesInput, CategoryUncheckedUpdateWithoutPropertiesInput>
    create: XOR<CategoryCreateWithoutPropertiesInput, CategoryUncheckedCreateWithoutPropertiesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPropertiesInput, CategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type CategoryUpdateWithoutPropertiesInput = {
    name?: JsonNullValueInput | InputJsonValue
    type?: TypeUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    name?: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesUpsertWithoutPropertiesInput = {
    update: XOR<GeneralAttributesUpdateWithoutPropertiesInput, GeneralAttributesUncheckedUpdateWithoutPropertiesInput>
    create: XOR<GeneralAttributesCreateWithoutPropertiesInput, GeneralAttributesUncheckedCreateWithoutPropertiesInput>
    where?: GeneralAttributesWhereInput
  }

  export type GeneralAttributesUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: GeneralAttributesWhereInput
    data: XOR<GeneralAttributesUpdateWithoutPropertiesInput, GeneralAttributesUncheckedUpdateWithoutPropertiesInput>
  }

  export type GeneralAttributesUpdateWithoutPropertiesInput = {
    attributes?: JsonNullValueInput | InputJsonValue
  }

  export type GeneralAttributesUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    attributes?: JsonNullValueInput | InputJsonValue
  }

  export type ImageSetUpsertWithoutPropertiesInput = {
    update: XOR<ImageSetUpdateWithoutPropertiesInput, ImageSetUncheckedUpdateWithoutPropertiesInput>
    create: XOR<ImageSetCreateWithoutPropertiesInput, ImageSetUncheckedCreateWithoutPropertiesInput>
    where?: ImageSetWhereInput
  }

  export type ImageSetUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: ImageSetWhereInput
    data: XOR<ImageSetUpdateWithoutPropertiesInput, ImageSetUncheckedUpdateWithoutPropertiesInput>
  }

  export type ImageSetUpdateWithoutPropertiesInput = {
    images?: JsonNullValueInput | InputJsonValue
  }

  export type ImageSetUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    images?: JsonNullValueInput | InputJsonValue
  }

  export type PropertyOwnerUpsertWithoutPropertiesInput = {
    update: XOR<PropertyOwnerUpdateWithoutPropertiesInput, PropertyOwnerUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PropertyOwnerCreateWithoutPropertiesInput, PropertyOwnerUncheckedCreateWithoutPropertiesInput>
    where?: PropertyOwnerWhereInput
  }

  export type PropertyOwnerUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PropertyOwnerWhereInput
    data: XOR<PropertyOwnerUpdateWithoutPropertiesInput, PropertyOwnerUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyOwnerUpdateWithoutPropertiesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    role?: RoleUpdateOneRequiredWithoutPropertyOwnersNestedInput
  }

  export type PropertyOwnerUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TypeCreateWithoutCategoriesInput = {
    key: string
    name: JsonNullValueInput | InputJsonValue
    secondaryName: JsonNullValueInput | InputJsonValue
    totalCount: number
    children: JsonNullValueInput | InputJsonValue
  }

  export type TypeUncheckedCreateWithoutCategoriesInput = {
    id?: number
    key: string
    name: JsonNullValueInput | InputJsonValue
    secondaryName: JsonNullValueInput | InputJsonValue
    totalCount: number
    children: JsonNullValueInput | InputJsonValue
  }

  export type TypeCreateOrConnectWithoutCategoriesInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutCategoriesInput, TypeUncheckedCreateWithoutCategoriesInput>
  }

  export type PropertyCreateWithoutCategoryInput = {
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    generalAttributes: GeneralAttributesCreateNestedOneWithoutPropertiesInput
    imageSet: ImageSetCreateNestedOneWithoutPropertiesInput
    propertyOwner: PropertyOwnerCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutCategoryInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyCreateOrConnectWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyCreateManyCategoryInputEnvelope = {
    data: PropertyCreateManyCategoryInput | PropertyCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TypeUpsertWithoutCategoriesInput = {
    update: XOR<TypeUpdateWithoutCategoriesInput, TypeUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TypeCreateWithoutCategoriesInput, TypeUncheckedCreateWithoutCategoriesInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutCategoriesInput, TypeUncheckedUpdateWithoutCategoriesInput>
  }

  export type TypeUpdateWithoutCategoriesInput = {
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    secondaryName?: JsonNullValueInput | InputJsonValue
    totalCount?: IntFieldUpdateOperationsInput | number
    children?: JsonNullValueInput | InputJsonValue
  }

  export type TypeUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    name?: JsonNullValueInput | InputJsonValue
    secondaryName?: JsonNullValueInput | InputJsonValue
    totalCount?: IntFieldUpdateOperationsInput | number
    children?: JsonNullValueInput | InputJsonValue
  }

  export type PropertyUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCategoryInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutTypeInput = {
    name: JsonNullValueInput | InputJsonValue
    properties?: PropertyCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTypeInput = {
    id?: number
    name: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTypeInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput>
  }

  export type CategoryCreateManyTypeInputEnvelope = {
    data: CategoryCreateManyTypeInput | CategoryCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutTypeInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutTypeInput, CategoryUncheckedUpdateWithoutTypeInput>
    create: XOR<CategoryCreateWithoutTypeInput, CategoryUncheckedCreateWithoutTypeInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutTypeInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutTypeInput, CategoryUncheckedUpdateWithoutTypeInput>
  }

  export type CategoryUpdateManyWithWhereWithoutTypeInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutTypeInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    typeId?: IntFilter<"Category"> | number
    name?: JsonFilter<"Category">
  }

  export type DistrictCreateWithoutAddressesInput = {
    name: string
    regions: RegionCreateNestedOneWithoutDistrictsInput
  }

  export type DistrictUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    regionId: number
  }

  export type DistrictCreateOrConnectWithoutAddressesInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutAddressesInput, DistrictUncheckedCreateWithoutAddressesInput>
  }

  export type RegionCreateWithoutAddressesInput = {
    name: string
    districts?: DistrictCreateNestedManyWithoutRegionsInput
  }

  export type RegionUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    districts?: DistrictUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type RegionCreateOrConnectWithoutAddressesInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutAddressesInput, RegionUncheckedCreateWithoutAddressesInput>
  }

  export type PropertyCreateWithoutAddressInput = {
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    category: CategoryCreateNestedOneWithoutPropertiesInput
    generalAttributes: GeneralAttributesCreateNestedOneWithoutPropertiesInput
    imageSet: ImageSetCreateNestedOneWithoutPropertiesInput
    propertyOwner: PropertyOwnerCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutAddressInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyCreateOrConnectWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyCreateManyAddressInputEnvelope = {
    data: PropertyCreateManyAddressInput | PropertyCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithoutAddressesInput = {
    update: XOR<DistrictUpdateWithoutAddressesInput, DistrictUncheckedUpdateWithoutAddressesInput>
    create: XOR<DistrictCreateWithoutAddressesInput, DistrictUncheckedCreateWithoutAddressesInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutAddressesInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutAddressesInput, DistrictUncheckedUpdateWithoutAddressesInput>
  }

  export type DistrictUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    regions?: RegionUpdateOneRequiredWithoutDistrictsNestedInput
  }

  export type DistrictUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    regionId?: IntFieldUpdateOperationsInput | number
  }

  export type RegionUpsertWithoutAddressesInput = {
    update: XOR<RegionUpdateWithoutAddressesInput, RegionUncheckedUpdateWithoutAddressesInput>
    create: XOR<RegionCreateWithoutAddressesInput, RegionUncheckedCreateWithoutAddressesInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutAddressesInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutAddressesInput, RegionUncheckedUpdateWithoutAddressesInput>
  }

  export type RegionUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUpdateManyWithoutRegionsNestedInput
  }

  export type RegionUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type PropertyUpsertWithWhereUniqueWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
    create: XOR<PropertyCreateWithoutAddressInput, PropertyUncheckedCreateWithoutAddressInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutAddressInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutAddressInput, PropertyUncheckedUpdateWithoutAddressInput>
  }

  export type PropertyUpdateManyWithWhereWithoutAddressInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutAddressInput>
  }

  export type AddressCreateWithoutRegionInput = {
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    district?: DistrictCreateNestedOneWithoutAddressesInput
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutRegionInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    districtId?: number | null
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutRegionInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutRegionInput, AddressUncheckedCreateWithoutRegionInput>
  }

  export type AddressCreateManyRegionInputEnvelope = {
    data: AddressCreateManyRegionInput | AddressCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type DistrictCreateWithoutRegionsInput = {
    name: string
    addresses?: AddressCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutRegionsInput = {
    id?: number
    name: string
    addresses?: AddressUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutRegionsInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutRegionsInput, DistrictUncheckedCreateWithoutRegionsInput>
  }

  export type DistrictCreateManyRegionsInputEnvelope = {
    data: DistrictCreateManyRegionsInput | DistrictCreateManyRegionsInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutRegionInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutRegionInput, AddressUncheckedUpdateWithoutRegionInput>
    create: XOR<AddressCreateWithoutRegionInput, AddressUncheckedCreateWithoutRegionInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutRegionInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutRegionInput, AddressUncheckedUpdateWithoutRegionInput>
  }

  export type AddressUpdateManyWithWhereWithoutRegionInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutRegionInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    area?: JsonFilter<"Address">
    house?: JsonFilter<"Address">
    geoLocation?: JsonFilter<"Address">
    fullAddress?: JsonFilter<"Address">
    metros?: JsonFilter<"Address">
    addressRouteKey?: StringFilter<"Address"> | string
    addressTypeKey?: StringFilter<"Address"> | string
    districtId?: IntNullableFilter<"Address"> | number | null
    regionId?: IntNullableFilter<"Address"> | number | null
  }

  export type DistrictUpsertWithWhereUniqueWithoutRegionsInput = {
    where: DistrictWhereUniqueInput
    update: XOR<DistrictUpdateWithoutRegionsInput, DistrictUncheckedUpdateWithoutRegionsInput>
    create: XOR<DistrictCreateWithoutRegionsInput, DistrictUncheckedCreateWithoutRegionsInput>
  }

  export type DistrictUpdateWithWhereUniqueWithoutRegionsInput = {
    where: DistrictWhereUniqueInput
    data: XOR<DistrictUpdateWithoutRegionsInput, DistrictUncheckedUpdateWithoutRegionsInput>
  }

  export type DistrictUpdateManyWithWhereWithoutRegionsInput = {
    where: DistrictScalarWhereInput
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyWithoutRegionsInput>
  }

  export type DistrictScalarWhereInput = {
    AND?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
    OR?: DistrictScalarWhereInput[]
    NOT?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
    id?: IntFilter<"District"> | number
    name?: StringFilter<"District"> | string
    regionId?: IntFilter<"District"> | number
  }

  export type AddressCreateWithoutDistrictInput = {
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    region?: RegionCreateNestedOneWithoutAddressesInput
    properties?: PropertyCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutDistrictInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    regionId?: number | null
    properties?: PropertyUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutDistrictInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutDistrictInput, AddressUncheckedCreateWithoutDistrictInput>
  }

  export type AddressCreateManyDistrictInputEnvelope = {
    data: AddressCreateManyDistrictInput | AddressCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type RegionCreateWithoutDistrictsInput = {
    name: string
    addresses?: AddressCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutDistrictsInput = {
    id?: number
    name: string
    addresses?: AddressUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutDistrictsInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutDistrictsInput, RegionUncheckedCreateWithoutDistrictsInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutDistrictInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutDistrictInput, AddressUncheckedUpdateWithoutDistrictInput>
    create: XOR<AddressCreateWithoutDistrictInput, AddressUncheckedCreateWithoutDistrictInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutDistrictInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutDistrictInput, AddressUncheckedUpdateWithoutDistrictInput>
  }

  export type AddressUpdateManyWithWhereWithoutDistrictInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutDistrictInput>
  }

  export type RegionUpsertWithoutDistrictsInput = {
    update: XOR<RegionUpdateWithoutDistrictsInput, RegionUncheckedUpdateWithoutDistrictsInput>
    create: XOR<RegionCreateWithoutDistrictsInput, RegionUncheckedCreateWithoutDistrictsInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutDistrictsInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutDistrictsInput, RegionUncheckedUpdateWithoutDistrictsInput>
  }

  export type RegionUpdateWithoutDistrictsInput = {
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutDistrictsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type PropertyCreateWithoutImageSetInput = {
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    generalAttributes: GeneralAttributesCreateNestedOneWithoutPropertiesInput
    propertyOwner: PropertyOwnerCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutImageSetInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyCreateOrConnectWithoutImageSetInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImageSetInput, PropertyUncheckedCreateWithoutImageSetInput>
  }

  export type PropertyCreateManyImageSetInputEnvelope = {
    data: PropertyCreateManyImageSetInput | PropertyCreateManyImageSetInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutImageSetInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutImageSetInput, PropertyUncheckedUpdateWithoutImageSetInput>
    create: XOR<PropertyCreateWithoutImageSetInput, PropertyUncheckedCreateWithoutImageSetInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutImageSetInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutImageSetInput, PropertyUncheckedUpdateWithoutImageSetInput>
  }

  export type PropertyUpdateManyWithWhereWithoutImageSetInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutImageSetInput>
  }

  export type PropertyCreateWithoutGeneralAttributesInput = {
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
    address: AddressCreateNestedOneWithoutPropertiesInput
    category: CategoryCreateNestedOneWithoutPropertiesInput
    imageSet: ImageSetCreateNestedOneWithoutPropertiesInput
    propertyOwner: PropertyOwnerCreateNestedOneWithoutPropertiesInput
  }

  export type PropertyUncheckedCreateWithoutGeneralAttributesInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyCreateOrConnectWithoutGeneralAttributesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutGeneralAttributesInput, PropertyUncheckedCreateWithoutGeneralAttributesInput>
  }

  export type PropertyCreateManyGeneralAttributesInputEnvelope = {
    data: PropertyCreateManyGeneralAttributesInput | PropertyCreateManyGeneralAttributesInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutGeneralAttributesInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutGeneralAttributesInput, PropertyUncheckedUpdateWithoutGeneralAttributesInput>
    create: XOR<PropertyCreateWithoutGeneralAttributesInput, PropertyUncheckedCreateWithoutGeneralAttributesInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutGeneralAttributesInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutGeneralAttributesInput, PropertyUncheckedUpdateWithoutGeneralAttributesInput>
  }

  export type PropertyUpdateManyWithWhereWithoutGeneralAttributesInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutGeneralAttributesInput>
  }

  export type PropertyCreateManyPropertyOwnerInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateWithoutPropertyOwnerInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    generalAttributes?: GeneralAttributesUpdateOneRequiredWithoutPropertiesNestedInput
    imageSet?: ImageSetUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyWithoutPropertyOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyOwnerCreateManyRoleInput = {
    id?: number
    firstName: string
    lastName: string
    avatarUrl?: string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyOwnerUpdateWithoutRoleInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyUpdateManyWithoutPropertyOwnerNestedInput
  }

  export type PropertyOwnerUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedUpdateManyWithoutPropertyOwnerNestedInput
  }

  export type PropertyOwnerUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarSet?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyCreateManyCategoryInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateWithoutCategoryInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    generalAttributes?: GeneralAttributesUpdateOneRequiredWithoutPropertiesNestedInput
    imageSet?: ImageSetUpdateOneRequiredWithoutPropertiesNestedInput
    propertyOwner?: PropertyOwnerUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateManyTypeInput = {
    id?: number
    name: JsonNullValueInput | InputJsonValue
  }

  export type CategoryUpdateWithoutTypeInput = {
    name?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: JsonNullValueInput | InputJsonValue
    properties?: PropertyUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: JsonNullValueInput | InputJsonValue
  }

  export type PropertyCreateManyAddressInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateWithoutAddressInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    generalAttributes?: GeneralAttributesUpdateOneRequiredWithoutPropertiesNestedInput
    imageSet?: ImageSetUpdateOneRequiredWithoutPropertiesNestedInput
    propertyOwner?: PropertyOwnerUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyRegionInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    districtId?: number | null
  }

  export type DistrictCreateManyRegionsInput = {
    id?: number
    name: string
  }

  export type AddressUpdateWithoutRegionInput = {
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    district?: DistrictUpdateOneWithoutAddressesNestedInput
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    districtId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DistrictUpdateWithoutRegionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addresses?: AddressUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateManyWithoutRegionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateManyDistrictInput = {
    id?: number
    area: JsonNullValueInput | InputJsonValue
    house: JsonNullValueInput | InputJsonValue
    geoLocation: JsonNullValueInput | InputJsonValue
    fullAddress: JsonNullValueInput | InputJsonValue
    metros: JsonNullValueInput | InputJsonValue
    addressRouteKey: string
    addressTypeKey: string
    regionId?: number | null
  }

  export type AddressUpdateWithoutDistrictInput = {
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneWithoutAddressesNestedInput
    properties?: PropertyUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    regionId?: NullableIntFieldUpdateOperationsInput | number | null
    properties?: PropertyUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutDistrictInput = {
    id?: IntFieldUpdateOperationsInput | number
    area?: JsonNullValueInput | InputJsonValue
    house?: JsonNullValueInput | InputJsonValue
    geoLocation?: JsonNullValueInput | InputJsonValue
    fullAddress?: JsonNullValueInput | InputJsonValue
    metros?: JsonNullValueInput | InputJsonValue
    addressRouteKey?: StringFieldUpdateOperationsInput | string
    addressTypeKey?: StringFieldUpdateOperationsInput | string
    regionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PropertyCreateManyImageSetInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    generalAttributesId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateWithoutImageSetInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    generalAttributes?: GeneralAttributesUpdateOneRequiredWithoutPropertiesNestedInput
    propertyOwner?: PropertyOwnerUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImageSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyWithoutImageSetInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    generalAttributesId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyCreateManyGeneralAttributesInput = {
    id?: number
    viewName: JsonNullValueInput | InputJsonValue
    boardName: JsonNullValueInput | InputJsonValue
    categoryId: number
    statusKey: string
    routeKey: string
    price: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit: string
    currency: string
    description: JsonNullValueInput | InputJsonValue
    addressId: number
    phone: string
    videoLink?: string | null
    viewCount: number
    isCommissioned: boolean
    imageSetsId: number
    propertyOwnerId: number
    isFavorite: boolean
    isHidden: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    publishedAt?: Date | string | null
  }

  export type PropertyUpdateWithoutGeneralAttributesInput = {
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateOneRequiredWithoutPropertiesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPropertiesNestedInput
    imageSet?: ImageSetUpdateOneRequiredWithoutPropertiesNestedInput
    propertyOwner?: PropertyOwnerUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type PropertyUncheckedUpdateWithoutGeneralAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropertyUncheckedUpdateManyWithoutGeneralAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewName?: JsonNullValueInput | InputJsonValue
    boardName?: JsonNullValueInput | InputJsonValue
    categoryId?: IntFieldUpdateOperationsInput | number
    statusKey?: StringFieldUpdateOperationsInput | string
    routeKey?: StringFieldUpdateOperationsInput | string
    price?: JsonNullValueInput | InputJsonValue
    priceByUnit?: NullableJsonNullValueInput | InputJsonValue
    unit?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    description?: JsonNullValueInput | InputJsonValue
    addressId?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isCommissioned?: BoolFieldUpdateOperationsInput | boolean
    imageSetsId?: IntFieldUpdateOperationsInput | number
    propertyOwnerId?: IntFieldUpdateOperationsInput | number
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PropertyOwnerCountOutputTypeDefaultArgs instead
     */
    export type PropertyOwnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyOwnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeCountOutputTypeDefaultArgs instead
     */
    export type TypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressCountOutputTypeDefaultArgs instead
     */
    export type AddressCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionCountOutputTypeDefaultArgs instead
     */
    export type RegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistrictCountOutputTypeDefaultArgs instead
     */
    export type DistrictCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistrictCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageSetCountOutputTypeDefaultArgs instead
     */
    export type ImageSetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageSetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GeneralAttributesCountOutputTypeDefaultArgs instead
     */
    export type GeneralAttributesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GeneralAttributesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyOwnerDefaultArgs instead
     */
    export type PropertyOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyOwnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropertyDefaultArgs instead
     */
    export type PropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeDefaultArgs instead
     */
    export type TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionDefaultArgs instead
     */
    export type RegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistrictDefaultArgs instead
     */
    export type DistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistrictDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageSetDefaultArgs instead
     */
    export type ImageSetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageSetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GeneralAttributesDefaultArgs instead
     */
    export type GeneralAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GeneralAttributesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}