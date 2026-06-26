
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model SupplierPayment
 * 
 */
export type SupplierPayment = $Result.DefaultSelection<Prisma.$SupplierPaymentPayload>
/**
 * Model PurchaseItem
 * 
 */
export type PurchaseItem = $Result.DefaultSelection<Prisma.$PurchaseItemPayload>
/**
 * Model ReturnInward
 * 
 */
export type ReturnInward = $Result.DefaultSelection<Prisma.$ReturnInwardPayload>
/**
 * Model ReturnInwardItem
 * 
 */
export type ReturnInwardItem = $Result.DefaultSelection<Prisma.$ReturnInwardItemPayload>
/**
 * Model ReturnOutward
 * 
 */
export type ReturnOutward = $Result.DefaultSelection<Prisma.$ReturnOutwardPayload>
/**
 * Model ReturnOutwardItem
 * 
 */
export type ReturnOutwardItem = $Result.DefaultSelection<Prisma.$ReturnOutwardItemPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model StockAdjustment
 * 
 */
export type StockAdjustment = $Result.DefaultSelection<Prisma.$StockAdjustmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs>;

  /**
   * `prisma.supplierPayment`: Exposes CRUD operations for the **SupplierPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierPayments
    * const supplierPayments = await prisma.supplierPayment.findMany()
    * ```
    */
  get supplierPayment(): Prisma.SupplierPaymentDelegate<ExtArgs>;

  /**
   * `prisma.purchaseItem`: Exposes CRUD operations for the **PurchaseItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseItems
    * const purchaseItems = await prisma.purchaseItem.findMany()
    * ```
    */
  get purchaseItem(): Prisma.PurchaseItemDelegate<ExtArgs>;

  /**
   * `prisma.returnInward`: Exposes CRUD operations for the **ReturnInward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnInwards
    * const returnInwards = await prisma.returnInward.findMany()
    * ```
    */
  get returnInward(): Prisma.ReturnInwardDelegate<ExtArgs>;

  /**
   * `prisma.returnInwardItem`: Exposes CRUD operations for the **ReturnInwardItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnInwardItems
    * const returnInwardItems = await prisma.returnInwardItem.findMany()
    * ```
    */
  get returnInwardItem(): Prisma.ReturnInwardItemDelegate<ExtArgs>;

  /**
   * `prisma.returnOutward`: Exposes CRUD operations for the **ReturnOutward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnOutwards
    * const returnOutwards = await prisma.returnOutward.findMany()
    * ```
    */
  get returnOutward(): Prisma.ReturnOutwardDelegate<ExtArgs>;

  /**
   * `prisma.returnOutwardItem`: Exposes CRUD operations for the **ReturnOutwardItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReturnOutwardItems
    * const returnOutwardItems = await prisma.returnOutwardItem.findMany()
    * ```
    */
  get returnOutwardItem(): Prisma.ReturnOutwardItemDelegate<ExtArgs>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs>;

  /**
   * `prisma.stockAdjustment`: Exposes CRUD operations for the **StockAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockAdjustments
    * const stockAdjustments = await prisma.stockAdjustment.findMany()
    * ```
    */
  get stockAdjustment(): Prisma.StockAdjustmentDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    User: 'User',
    Supplier: 'Supplier',
    Product: 'Product',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    Purchase: 'Purchase',
    SupplierPayment: 'SupplierPayment',
    PurchaseItem: 'PurchaseItem',
    ReturnInward: 'ReturnInward',
    ReturnInwardItem: 'ReturnInwardItem',
    ReturnOutward: 'ReturnOutward',
    ReturnOutwardItem: 'ReturnOutwardItem',
    Expense: 'Expense',
    StockAdjustment: 'StockAdjustment'
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
      modelProps: "user" | "supplier" | "product" | "sale" | "saleItem" | "purchase" | "supplierPayment" | "purchaseItem" | "returnInward" | "returnInwardItem" | "returnOutward" | "returnOutwardItem" | "expense" | "stockAdjustment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      SupplierPayment: {
        payload: Prisma.$SupplierPaymentPayload<ExtArgs>
        fields: Prisma.SupplierPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          findFirst: {
            args: Prisma.SupplierPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          findMany: {
            args: Prisma.SupplierPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          create: {
            args: Prisma.SupplierPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          createMany: {
            args: Prisma.SupplierPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>[]
          }
          delete: {
            args: Prisma.SupplierPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          update: {
            args: Prisma.SupplierPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          deleteMany: {
            args: Prisma.SupplierPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPaymentPayload>
          }
          aggregate: {
            args: Prisma.SupplierPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierPayment>
          }
          groupBy: {
            args: Prisma.SupplierPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierPaymentCountAggregateOutputType> | number
          }
        }
      }
      PurchaseItem: {
        payload: Prisma.$PurchaseItemPayload<ExtArgs>
        fields: Prisma.PurchaseItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findFirst: {
            args: Prisma.PurchaseItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          findMany: {
            args: Prisma.PurchaseItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          create: {
            args: Prisma.PurchaseItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          createMany: {
            args: Prisma.PurchaseItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>[]
          }
          delete: {
            args: Prisma.PurchaseItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          update: {
            args: Prisma.PurchaseItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PurchaseItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseItemPayload>
          }
          aggregate: {
            args: Prisma.PurchaseItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseItem>
          }
          groupBy: {
            args: Prisma.PurchaseItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseItemCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseItemCountAggregateOutputType> | number
          }
        }
      }
      ReturnInward: {
        payload: Prisma.$ReturnInwardPayload<ExtArgs>
        fields: Prisma.ReturnInwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnInwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnInwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>
          }
          findFirst: {
            args: Prisma.ReturnInwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnInwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>
          }
          findMany: {
            args: Prisma.ReturnInwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>[]
          }
          create: {
            args: Prisma.ReturnInwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>
          }
          createMany: {
            args: Prisma.ReturnInwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnInwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>[]
          }
          delete: {
            args: Prisma.ReturnInwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>
          }
          update: {
            args: Prisma.ReturnInwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>
          }
          deleteMany: {
            args: Prisma.ReturnInwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnInwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReturnInwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardPayload>
          }
          aggregate: {
            args: Prisma.ReturnInwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnInward>
          }
          groupBy: {
            args: Prisma.ReturnInwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnInwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnInwardCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnInwardCountAggregateOutputType> | number
          }
        }
      }
      ReturnInwardItem: {
        payload: Prisma.$ReturnInwardItemPayload<ExtArgs>
        fields: Prisma.ReturnInwardItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnInwardItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnInwardItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>
          }
          findFirst: {
            args: Prisma.ReturnInwardItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnInwardItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>
          }
          findMany: {
            args: Prisma.ReturnInwardItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>[]
          }
          create: {
            args: Prisma.ReturnInwardItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>
          }
          createMany: {
            args: Prisma.ReturnInwardItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnInwardItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>[]
          }
          delete: {
            args: Prisma.ReturnInwardItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>
          }
          update: {
            args: Prisma.ReturnInwardItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>
          }
          deleteMany: {
            args: Prisma.ReturnInwardItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnInwardItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReturnInwardItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnInwardItemPayload>
          }
          aggregate: {
            args: Prisma.ReturnInwardItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnInwardItem>
          }
          groupBy: {
            args: Prisma.ReturnInwardItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnInwardItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnInwardItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnInwardItemCountAggregateOutputType> | number
          }
        }
      }
      ReturnOutward: {
        payload: Prisma.$ReturnOutwardPayload<ExtArgs>
        fields: Prisma.ReturnOutwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnOutwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnOutwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>
          }
          findFirst: {
            args: Prisma.ReturnOutwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnOutwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>
          }
          findMany: {
            args: Prisma.ReturnOutwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>[]
          }
          create: {
            args: Prisma.ReturnOutwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>
          }
          createMany: {
            args: Prisma.ReturnOutwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnOutwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>[]
          }
          delete: {
            args: Prisma.ReturnOutwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>
          }
          update: {
            args: Prisma.ReturnOutwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>
          }
          deleteMany: {
            args: Prisma.ReturnOutwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnOutwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReturnOutwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardPayload>
          }
          aggregate: {
            args: Prisma.ReturnOutwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnOutward>
          }
          groupBy: {
            args: Prisma.ReturnOutwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnOutwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnOutwardCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnOutwardCountAggregateOutputType> | number
          }
        }
      }
      ReturnOutwardItem: {
        payload: Prisma.$ReturnOutwardItemPayload<ExtArgs>
        fields: Prisma.ReturnOutwardItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReturnOutwardItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReturnOutwardItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>
          }
          findFirst: {
            args: Prisma.ReturnOutwardItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReturnOutwardItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>
          }
          findMany: {
            args: Prisma.ReturnOutwardItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>[]
          }
          create: {
            args: Prisma.ReturnOutwardItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>
          }
          createMany: {
            args: Prisma.ReturnOutwardItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReturnOutwardItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>[]
          }
          delete: {
            args: Prisma.ReturnOutwardItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>
          }
          update: {
            args: Prisma.ReturnOutwardItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>
          }
          deleteMany: {
            args: Prisma.ReturnOutwardItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReturnOutwardItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReturnOutwardItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReturnOutwardItemPayload>
          }
          aggregate: {
            args: Prisma.ReturnOutwardItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReturnOutwardItem>
          }
          groupBy: {
            args: Prisma.ReturnOutwardItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReturnOutwardItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReturnOutwardItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReturnOutwardItemCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      StockAdjustment: {
        payload: Prisma.$StockAdjustmentPayload<ExtArgs>
        fields: Prisma.StockAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.StockAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          findMany: {
            args: Prisma.StockAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[]
          }
          create: {
            args: Prisma.StockAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          createMany: {
            args: Prisma.StockAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockAdjustmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>[]
          }
          delete: {
            args: Prisma.StockAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          update: {
            args: Prisma.StockAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.StockAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.StockAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockAdjustment>
          }
          groupBy: {
            args: Prisma.StockAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<StockAdjustmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sales: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | UserCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    purchases: number
    returnOutwards: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | SupplierCountOutputTypeCountPurchasesArgs
    returnOutwards?: boolean | SupplierCountOutputTypeCountReturnOutwardsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountReturnOutwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnOutwardWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    saleItems: number
    purchaseItems: number
    returnInItems: number
    returnOutItems: number
    stockAdjustments: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | ProductCountOutputTypeCountSaleItemsArgs
    purchaseItems?: boolean | ProductCountOutputTypeCountPurchaseItemsArgs
    returnInItems?: boolean | ProductCountOutputTypeCountReturnInItemsArgs
    returnOutItems?: boolean | ProductCountOutputTypeCountReturnOutItemsArgs
    stockAdjustments?: boolean | ProductCountOutputTypeCountStockAdjustmentsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSaleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPurchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReturnInItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnInwardItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReturnOutItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnOutwardItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockAdjustmentWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
    returnInwards: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
    returnInwards?: boolean | SaleCountOutputTypeCountReturnInwardsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountReturnInwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnInwardWhereInput
  }


  /**
   * Count Type PurchaseCountOutputType
   */

  export type PurchaseCountOutputType = {
    items: number
    returnOutwards: number
    payments: number
  }

  export type PurchaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PurchaseCountOutputTypeCountItemsArgs
    returnOutwards?: boolean | PurchaseCountOutputTypeCountReturnOutwardsArgs
    payments?: boolean | PurchaseCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCountOutputType
     */
    select?: PurchaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountReturnOutwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnOutwardWhereInput
  }

  /**
   * PurchaseCountOutputType without action
   */
  export type PurchaseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
  }


  /**
   * Count Type ReturnInwardCountOutputType
   */

  export type ReturnInwardCountOutputType = {
    items: number
  }

  export type ReturnInwardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ReturnInwardCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ReturnInwardCountOutputType without action
   */
  export type ReturnInwardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardCountOutputType
     */
    select?: ReturnInwardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReturnInwardCountOutputType without action
   */
  export type ReturnInwardCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnInwardItemWhereInput
  }


  /**
   * Count Type ReturnOutwardCountOutputType
   */

  export type ReturnOutwardCountOutputType = {
    items: number
  }

  export type ReturnOutwardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ReturnOutwardCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ReturnOutwardCountOutputType without action
   */
  export type ReturnOutwardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardCountOutputType
     */
    select?: ReturnOutwardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReturnOutwardCountOutputType without action
   */
  export type ReturnOutwardCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnOutwardItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    sales?: boolean | User$salesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | User$salesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    address: number
    createdAt: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    email: string | null
    address: string | null
    createdAt: Date
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    purchases?: boolean | Supplier$purchasesArgs<ExtArgs>
    returnOutwards?: boolean | Supplier$returnOutwardsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | Supplier$purchasesArgs<ExtArgs>
    returnOutwards?: boolean | Supplier$returnOutwardsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      returnOutwards: Prisma.$ReturnOutwardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      email: string | null
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends Supplier$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany"> | Null>
    returnOutwards<T extends Supplier$returnOutwardsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$returnOutwardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Supplier model
   */ 
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier.purchases
   */
  export type Supplier$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Supplier.returnOutwards
   */
  export type Supplier$returnOutwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    where?: ReturnOutwardWhereInput
    orderBy?: ReturnOutwardOrderByWithRelationInput | ReturnOutwardOrderByWithRelationInput[]
    cursor?: ReturnOutwardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnOutwardScalarFieldEnum | ReturnOutwardScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    costPrice: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    costPrice: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    barcode: string | null
    price: number | null
    costPrice: number | null
    stock: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    barcode: string | null
    price: number | null
    costPrice: number | null
    stock: number | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    barcode: number
    price: number
    costPrice: number
    stock: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    costPrice?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    costPrice?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    price?: true
    costPrice?: true
    stock?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    price?: true
    costPrice?: true
    stock?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    barcode?: true
    price?: true
    costPrice?: true
    stock?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    barcode: string
    price: number
    costPrice: number
    stock: number
    category: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    price?: boolean
    costPrice?: boolean
    stock?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    purchaseItems?: boolean | Product$purchaseItemsArgs<ExtArgs>
    returnInItems?: boolean | Product$returnInItemsArgs<ExtArgs>
    returnOutItems?: boolean | Product$returnOutItemsArgs<ExtArgs>
    stockAdjustments?: boolean | Product$stockAdjustmentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    barcode?: boolean
    price?: boolean
    costPrice?: boolean
    stock?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    barcode?: boolean
    price?: boolean
    costPrice?: boolean
    stock?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItems?: boolean | Product$saleItemsArgs<ExtArgs>
    purchaseItems?: boolean | Product$purchaseItemsArgs<ExtArgs>
    returnInItems?: boolean | Product$returnInItemsArgs<ExtArgs>
    returnOutItems?: boolean | Product$returnOutItemsArgs<ExtArgs>
    stockAdjustments?: boolean | Product$stockAdjustmentsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      saleItems: Prisma.$SaleItemPayload<ExtArgs>[]
      purchaseItems: Prisma.$PurchaseItemPayload<ExtArgs>[]
      returnInItems: Prisma.$ReturnInwardItemPayload<ExtArgs>[]
      returnOutItems: Prisma.$ReturnOutwardItemPayload<ExtArgs>[]
      stockAdjustments: Prisma.$StockAdjustmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      barcode: string
      price: number
      costPrice: number
      stock: number
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleItems<T extends Product$saleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$saleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany"> | Null>
    purchaseItems<T extends Product$purchaseItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$purchaseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany"> | Null>
    returnInItems<T extends Product$returnInItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$returnInItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findMany"> | Null>
    returnOutItems<T extends Product$returnOutItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$returnOutItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findMany"> | Null>
    stockAdjustments<T extends Product$stockAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly costPrice: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly category: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.saleItems
   */
  export type Product$saleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Product.purchaseItems
   */
  export type Product$purchaseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * Product.returnInItems
   */
  export type Product$returnInItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    where?: ReturnInwardItemWhereInput
    orderBy?: ReturnInwardItemOrderByWithRelationInput | ReturnInwardItemOrderByWithRelationInput[]
    cursor?: ReturnInwardItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnInwardItemScalarFieldEnum | ReturnInwardItemScalarFieldEnum[]
  }

  /**
   * Product.returnOutItems
   */
  export type Product$returnOutItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    where?: ReturnOutwardItemWhereInput
    orderBy?: ReturnOutwardItemOrderByWithRelationInput | ReturnOutwardItemOrderByWithRelationInput[]
    cursor?: ReturnOutwardItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnOutwardItemScalarFieldEnum | ReturnOutwardItemScalarFieldEnum[]
  }

  /**
   * Product.stockAdjustments
   */
  export type Product$stockAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    where?: StockAdjustmentWhereInput
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    cursor?: StockAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    total: number | null
    cashAmount: number | null
    mpesaAmount: number | null
    userId: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    total: number | null
    cashAmount: number | null
    mpesaAmount: number | null
    userId: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    total: number | null
    paymentMethod: string | null
    cashAmount: number | null
    mpesaAmount: number | null
    status: string | null
    voidReason: string | null
    voidedAt: Date | null
    createdAt: Date | null
    userId: number | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    total: number | null
    paymentMethod: string | null
    cashAmount: number | null
    mpesaAmount: number | null
    status: string | null
    voidReason: string | null
    voidedAt: Date | null
    createdAt: Date | null
    userId: number | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    total: number
    paymentMethod: number
    cashAmount: number
    mpesaAmount: number
    status: number
    voidReason: number
    voidedAt: number
    createdAt: number
    userId: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    total?: true
    cashAmount?: true
    mpesaAmount?: true
    userId?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    total?: true
    cashAmount?: true
    mpesaAmount?: true
    userId?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    total?: true
    paymentMethod?: true
    cashAmount?: true
    mpesaAmount?: true
    status?: true
    voidReason?: true
    voidedAt?: true
    createdAt?: true
    userId?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    total?: true
    paymentMethod?: true
    cashAmount?: true
    mpesaAmount?: true
    status?: true
    voidReason?: true
    voidedAt?: true
    createdAt?: true
    userId?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    total?: true
    paymentMethod?: true
    cashAmount?: true
    mpesaAmount?: true
    status?: true
    voidReason?: true
    voidedAt?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    total: number
    paymentMethod: string
    cashAmount: number
    mpesaAmount: number
    status: string
    voidReason: string | null
    voidedAt: Date | null
    createdAt: Date
    userId: number
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    paymentMethod?: boolean
    cashAmount?: boolean
    mpesaAmount?: boolean
    status?: boolean
    voidReason?: boolean
    voidedAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    returnInwards?: boolean | Sale$returnInwardsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    paymentMethod?: boolean
    cashAmount?: boolean
    mpesaAmount?: boolean
    status?: boolean
    voidReason?: boolean
    voidedAt?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    total?: boolean
    paymentMethod?: boolean
    cashAmount?: boolean
    mpesaAmount?: boolean
    status?: boolean
    voidReason?: boolean
    voidedAt?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    returnInwards?: boolean | Sale$returnInwardsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$SaleItemPayload<ExtArgs>[]
      returnInwards: Prisma.$ReturnInwardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      paymentMethod: string
      cashAmount: number
      mpesaAmount: number
      status: string
      voidReason: string | null
      voidedAt: Date | null
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany"> | Null>
    returnInwards<T extends Sale$returnInwardsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$returnInwardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Sale model
   */ 
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'Int'>
    readonly total: FieldRef<"Sale", 'Float'>
    readonly paymentMethod: FieldRef<"Sale", 'String'>
    readonly cashAmount: FieldRef<"Sale", 'Float'>
    readonly mpesaAmount: FieldRef<"Sale", 'Float'>
    readonly status: FieldRef<"Sale", 'String'>
    readonly voidReason: FieldRef<"Sale", 'String'>
    readonly voidedAt: FieldRef<"Sale", 'DateTime'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly userId: FieldRef<"Sale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale.returnInwards
   */
  export type Sale$returnInwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    where?: ReturnInwardWhereInput
    orderBy?: ReturnInwardOrderByWithRelationInput | ReturnInwardOrderByWithRelationInput[]
    cursor?: ReturnInwardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnInwardScalarFieldEnum | ReturnInwardScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    originalPrice: number | null
    costPrice: number | null
    productId: number | null
    saleId: number | null
  }

  export type SaleItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    originalPrice: number | null
    costPrice: number | null
    productId: number | null
    saleId: number | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    originalPrice: number | null
    costPrice: number | null
    productId: number | null
    saleId: number | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    originalPrice: number | null
    costPrice: number | null
    productId: number | null
    saleId: number | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    originalPrice: number
    costPrice: number
    productId: number
    saleId: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    originalPrice?: true
    costPrice?: true
    productId?: true
    saleId?: true
  }

  export type SaleItemSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    originalPrice?: true
    costPrice?: true
    productId?: true
    saleId?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    originalPrice?: true
    costPrice?: true
    productId?: true
    saleId?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    originalPrice?: true
    costPrice?: true
    productId?: true
    saleId?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    originalPrice?: true
    costPrice?: true
    productId?: true
    saleId?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: number
    quantity: number
    price: number
    originalPrice: number
    costPrice: number
    productId: number
    saleId: number
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    originalPrice?: boolean
    costPrice?: boolean
    productId?: boolean
    saleId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    originalPrice?: boolean
    costPrice?: boolean
    productId?: boolean
    saleId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    originalPrice?: boolean
    costPrice?: boolean
    productId?: boolean
    saleId?: boolean
  }

  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      sale: Prisma.$SalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: number
      originalPrice: number
      costPrice: number
      productId: number
      saleId: number
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
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
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SaleItem model
   */ 
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'Int'>
    readonly quantity: FieldRef<"SaleItem", 'Int'>
    readonly price: FieldRef<"SaleItem", 'Float'>
    readonly originalPrice: FieldRef<"SaleItem", 'Float'>
    readonly costPrice: FieldRef<"SaleItem", 'Float'>
    readonly productId: FieldRef<"SaleItem", 'Int'>
    readonly saleId: FieldRef<"SaleItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    carriageInwards: number | null
    amountPaid: number | null
    supplierId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    carriageInwards: number | null
    amountPaid: number | null
    supplierId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    referenceNo: string | null
    totalAmount: number | null
    carriageInwards: number | null
    amountPaid: number | null
    paymentStatus: string | null
    notes: string | null
    createdAt: Date | null
    supplierId: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    referenceNo: string | null
    totalAmount: number | null
    carriageInwards: number | null
    amountPaid: number | null
    paymentStatus: string | null
    notes: string | null
    createdAt: Date | null
    supplierId: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    referenceNo: number
    totalAmount: number
    carriageInwards: number
    amountPaid: number
    paymentStatus: number
    notes: number
    createdAt: number
    supplierId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    totalAmount?: true
    carriageInwards?: true
    amountPaid?: true
    supplierId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    totalAmount?: true
    carriageInwards?: true
    amountPaid?: true
    supplierId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    referenceNo?: true
    totalAmount?: true
    carriageInwards?: true
    amountPaid?: true
    paymentStatus?: true
    notes?: true
    createdAt?: true
    supplierId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    referenceNo?: true
    totalAmount?: true
    carriageInwards?: true
    amountPaid?: true
    paymentStatus?: true
    notes?: true
    createdAt?: true
    supplierId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    referenceNo?: true
    totalAmount?: true
    carriageInwards?: true
    amountPaid?: true
    paymentStatus?: true
    notes?: true
    createdAt?: true
    supplierId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    referenceNo: string | null
    totalAmount: number
    carriageInwards: number
    amountPaid: number
    paymentStatus: string
    notes: string | null
    createdAt: Date
    supplierId: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    totalAmount?: boolean
    carriageInwards?: boolean
    amountPaid?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    supplierId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    returnOutwards?: boolean | Purchase$returnOutwardsArgs<ExtArgs>
    payments?: boolean | Purchase$paymentsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    totalAmount?: boolean
    carriageInwards?: boolean
    amountPaid?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    supplierId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    referenceNo?: boolean
    totalAmount?: boolean
    carriageInwards?: boolean
    amountPaid?: boolean
    paymentStatus?: boolean
    notes?: boolean
    createdAt?: boolean
    supplierId?: boolean
  }

  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    items?: boolean | Purchase$itemsArgs<ExtArgs>
    returnOutwards?: boolean | Purchase$returnOutwardsArgs<ExtArgs>
    payments?: boolean | Purchase$paymentsArgs<ExtArgs>
    _count?: boolean | PurchaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      items: Prisma.$PurchaseItemPayload<ExtArgs>[]
      returnOutwards: Prisma.$ReturnOutwardPayload<ExtArgs>[]
      payments: Prisma.$SupplierPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      referenceNo: string | null
      totalAmount: number
      carriageInwards: number
      amountPaid: number
      paymentStatus: string
      notes: string | null
      createdAt: Date
      supplierId: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
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
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Purchase$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany"> | Null>
    returnOutwards<T extends Purchase$returnOutwardsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$returnOutwardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Purchase$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Purchase$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Purchase model
   */ 
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly referenceNo: FieldRef<"Purchase", 'String'>
    readonly totalAmount: FieldRef<"Purchase", 'Float'>
    readonly carriageInwards: FieldRef<"Purchase", 'Float'>
    readonly amountPaid: FieldRef<"Purchase", 'Float'>
    readonly paymentStatus: FieldRef<"Purchase", 'String'>
    readonly notes: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly supplierId: FieldRef<"Purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
  }

  /**
   * Purchase.items
   */
  export type Purchase$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    cursor?: PurchaseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * Purchase.returnOutwards
   */
  export type Purchase$returnOutwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    where?: ReturnOutwardWhereInput
    orderBy?: ReturnOutwardOrderByWithRelationInput | ReturnOutwardOrderByWithRelationInput[]
    cursor?: ReturnOutwardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnOutwardScalarFieldEnum | ReturnOutwardScalarFieldEnum[]
  }

  /**
   * Purchase.payments
   */
  export type Purchase$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    cursor?: SupplierPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model SupplierPayment
   */

  export type AggregateSupplierPayment = {
    _count: SupplierPaymentCountAggregateOutputType | null
    _avg: SupplierPaymentAvgAggregateOutputType | null
    _sum: SupplierPaymentSumAggregateOutputType | null
    _min: SupplierPaymentMinAggregateOutputType | null
    _max: SupplierPaymentMaxAggregateOutputType | null
  }

  export type SupplierPaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    purchaseId: number | null
  }

  export type SupplierPaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    purchaseId: number | null
  }

  export type SupplierPaymentMinAggregateOutputType = {
    id: number | null
    amount: number | null
    method: string | null
    notes: string | null
    createdAt: Date | null
    purchaseId: number | null
  }

  export type SupplierPaymentMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    method: string | null
    notes: string | null
    createdAt: Date | null
    purchaseId: number | null
  }

  export type SupplierPaymentCountAggregateOutputType = {
    id: number
    amount: number
    method: number
    notes: number
    createdAt: number
    purchaseId: number
    _all: number
  }


  export type SupplierPaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    purchaseId?: true
  }

  export type SupplierPaymentSumAggregateInputType = {
    id?: true
    amount?: true
    purchaseId?: true
  }

  export type SupplierPaymentMinAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    notes?: true
    createdAt?: true
    purchaseId?: true
  }

  export type SupplierPaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    notes?: true
    createdAt?: true
    purchaseId?: true
  }

  export type SupplierPaymentCountAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    notes?: true
    createdAt?: true
    purchaseId?: true
    _all?: true
  }

  export type SupplierPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPayment to aggregate.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierPayments
    **/
    _count?: true | SupplierPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierPaymentMaxAggregateInputType
  }

  export type GetSupplierPaymentAggregateType<T extends SupplierPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierPayment[P]>
      : GetScalarType<T[P], AggregateSupplierPayment[P]>
  }




  export type SupplierPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierPaymentWhereInput
    orderBy?: SupplierPaymentOrderByWithAggregationInput | SupplierPaymentOrderByWithAggregationInput[]
    by: SupplierPaymentScalarFieldEnum[] | SupplierPaymentScalarFieldEnum
    having?: SupplierPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierPaymentCountAggregateInputType | true
    _avg?: SupplierPaymentAvgAggregateInputType
    _sum?: SupplierPaymentSumAggregateInputType
    _min?: SupplierPaymentMinAggregateInputType
    _max?: SupplierPaymentMaxAggregateInputType
  }

  export type SupplierPaymentGroupByOutputType = {
    id: number
    amount: number
    method: string
    notes: string | null
    createdAt: Date
    purchaseId: number
    _count: SupplierPaymentCountAggregateOutputType | null
    _avg: SupplierPaymentAvgAggregateOutputType | null
    _sum: SupplierPaymentSumAggregateOutputType | null
    _min: SupplierPaymentMinAggregateOutputType | null
    _max: SupplierPaymentMaxAggregateOutputType | null
  }

  type GetSupplierPaymentGroupByPayload<T extends SupplierPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierPaymentGroupByOutputType[P]>
        }
      >
    >


  export type SupplierPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    notes?: boolean
    createdAt?: boolean
    purchaseId?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    notes?: boolean
    createdAt?: boolean
    purchaseId?: boolean
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierPayment"]>

  export type SupplierPaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    method?: boolean
    notes?: boolean
    createdAt?: boolean
    purchaseId?: boolean
  }

  export type SupplierPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type SupplierPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $SupplierPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierPayment"
    objects: {
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      method: string
      notes: string | null
      createdAt: Date
      purchaseId: number
    }, ExtArgs["result"]["supplierPayment"]>
    composites: {}
  }

  type SupplierPaymentGetPayload<S extends boolean | null | undefined | SupplierPaymentDefaultArgs> = $Result.GetResult<Prisma.$SupplierPaymentPayload, S>

  type SupplierPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierPaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierPaymentCountAggregateInputType | true
    }

  export interface SupplierPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierPayment'], meta: { name: 'SupplierPayment' } }
    /**
     * Find zero or one SupplierPayment that matches the filter.
     * @param {SupplierPaymentFindUniqueArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierPaymentFindUniqueArgs>(args: SelectSubset<T, SupplierPaymentFindUniqueArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupplierPayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierPaymentFindUniqueOrThrowArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupplierPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindFirstArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierPaymentFindFirstArgs>(args?: SelectSubset<T, SupplierPaymentFindFirstArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupplierPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindFirstOrThrowArgs} args - Arguments to find a SupplierPayment
     * @example
     * // Get one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupplierPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierPayments
     * const supplierPayments = await prisma.supplierPayment.findMany()
     * 
     * // Get first 10 SupplierPayments
     * const supplierPayments = await prisma.supplierPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierPaymentFindManyArgs>(args?: SelectSubset<T, SupplierPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupplierPayment.
     * @param {SupplierPaymentCreateArgs} args - Arguments to create a SupplierPayment.
     * @example
     * // Create one SupplierPayment
     * const SupplierPayment = await prisma.supplierPayment.create({
     *   data: {
     *     // ... data to create a SupplierPayment
     *   }
     * })
     * 
     */
    create<T extends SupplierPaymentCreateArgs>(args: SelectSubset<T, SupplierPaymentCreateArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupplierPayments.
     * @param {SupplierPaymentCreateManyArgs} args - Arguments to create many SupplierPayments.
     * @example
     * // Create many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierPaymentCreateManyArgs>(args?: SelectSubset<T, SupplierPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierPayments and returns the data saved in the database.
     * @param {SupplierPaymentCreateManyAndReturnArgs} args - Arguments to create many SupplierPayments.
     * @example
     * // Create many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierPayments and only return the `id`
     * const supplierPaymentWithIdOnly = await prisma.supplierPayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupplierPayment.
     * @param {SupplierPaymentDeleteArgs} args - Arguments to delete one SupplierPayment.
     * @example
     * // Delete one SupplierPayment
     * const SupplierPayment = await prisma.supplierPayment.delete({
     *   where: {
     *     // ... filter to delete one SupplierPayment
     *   }
     * })
     * 
     */
    delete<T extends SupplierPaymentDeleteArgs>(args: SelectSubset<T, SupplierPaymentDeleteArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupplierPayment.
     * @param {SupplierPaymentUpdateArgs} args - Arguments to update one SupplierPayment.
     * @example
     * // Update one SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierPaymentUpdateArgs>(args: SelectSubset<T, SupplierPaymentUpdateArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupplierPayments.
     * @param {SupplierPaymentDeleteManyArgs} args - Arguments to filter SupplierPayments to delete.
     * @example
     * // Delete a few SupplierPayments
     * const { count } = await prisma.supplierPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierPaymentDeleteManyArgs>(args?: SelectSubset<T, SupplierPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierPayments
     * const supplierPayment = await prisma.supplierPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierPaymentUpdateManyArgs>(args: SelectSubset<T, SupplierPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierPayment.
     * @param {SupplierPaymentUpsertArgs} args - Arguments to update or create a SupplierPayment.
     * @example
     * // Update or create a SupplierPayment
     * const supplierPayment = await prisma.supplierPayment.upsert({
     *   create: {
     *     // ... data to create a SupplierPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierPayment we want to update
     *   }
     * })
     */
    upsert<T extends SupplierPaymentUpsertArgs>(args: SelectSubset<T, SupplierPaymentUpsertArgs<ExtArgs>>): Prisma__SupplierPaymentClient<$Result.GetResult<Prisma.$SupplierPaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupplierPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentCountArgs} args - Arguments to filter SupplierPayments to count.
     * @example
     * // Count the number of SupplierPayments
     * const count = await prisma.supplierPayment.count({
     *   where: {
     *     // ... the filter for the SupplierPayments we want to count
     *   }
     * })
    **/
    count<T extends SupplierPaymentCountArgs>(
      args?: Subset<T, SupplierPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierPaymentAggregateArgs>(args: Subset<T, SupplierPaymentAggregateArgs>): Prisma.PrismaPromise<GetSupplierPaymentAggregateType<T>>

    /**
     * Group by SupplierPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierPaymentGroupByArgs} args - Group by arguments.
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
      T extends SupplierPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierPaymentGroupByArgs['orderBy'] }
        : { orderBy?: SupplierPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierPayment model
   */
  readonly fields: SupplierPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SupplierPayment model
   */ 
  interface SupplierPaymentFieldRefs {
    readonly id: FieldRef<"SupplierPayment", 'Int'>
    readonly amount: FieldRef<"SupplierPayment", 'Float'>
    readonly method: FieldRef<"SupplierPayment", 'String'>
    readonly notes: FieldRef<"SupplierPayment", 'String'>
    readonly createdAt: FieldRef<"SupplierPayment", 'DateTime'>
    readonly purchaseId: FieldRef<"SupplierPayment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SupplierPayment findUnique
   */
  export type SupplierPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment findUniqueOrThrow
   */
  export type SupplierPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment findFirst
   */
  export type SupplierPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment findFirstOrThrow
   */
  export type SupplierPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayment to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierPayments.
     */
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment findMany
   */
  export type SupplierPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter, which SupplierPayments to fetch.
     */
    where?: SupplierPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierPayments to fetch.
     */
    orderBy?: SupplierPaymentOrderByWithRelationInput | SupplierPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierPayments.
     */
    cursor?: SupplierPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierPayments.
     */
    skip?: number
    distinct?: SupplierPaymentScalarFieldEnum | SupplierPaymentScalarFieldEnum[]
  }

  /**
   * SupplierPayment create
   */
  export type SupplierPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierPayment.
     */
    data: XOR<SupplierPaymentCreateInput, SupplierPaymentUncheckedCreateInput>
  }

  /**
   * SupplierPayment createMany
   */
  export type SupplierPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierPayments.
     */
    data: SupplierPaymentCreateManyInput | SupplierPaymentCreateManyInput[]
  }

  /**
   * SupplierPayment createManyAndReturn
   */
  export type SupplierPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupplierPayments.
     */
    data: SupplierPaymentCreateManyInput | SupplierPaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierPayment update
   */
  export type SupplierPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierPayment.
     */
    data: XOR<SupplierPaymentUpdateInput, SupplierPaymentUncheckedUpdateInput>
    /**
     * Choose, which SupplierPayment to update.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment updateMany
   */
  export type SupplierPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierPayments.
     */
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyInput>
    /**
     * Filter which SupplierPayments to update
     */
    where?: SupplierPaymentWhereInput
  }

  /**
   * SupplierPayment upsert
   */
  export type SupplierPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierPayment to update in case it exists.
     */
    where: SupplierPaymentWhereUniqueInput
    /**
     * In case the SupplierPayment found by the `where` argument doesn't exist, create a new SupplierPayment with this data.
     */
    create: XOR<SupplierPaymentCreateInput, SupplierPaymentUncheckedCreateInput>
    /**
     * In case the SupplierPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierPaymentUpdateInput, SupplierPaymentUncheckedUpdateInput>
  }

  /**
   * SupplierPayment delete
   */
  export type SupplierPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
    /**
     * Filter which SupplierPayment to delete.
     */
    where: SupplierPaymentWhereUniqueInput
  }

  /**
   * SupplierPayment deleteMany
   */
  export type SupplierPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierPayments to delete
     */
    where?: SupplierPaymentWhereInput
  }

  /**
   * SupplierPayment without action
   */
  export type SupplierPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierPayment
     */
    select?: SupplierPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierPaymentInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseItem
   */

  export type AggregatePurchaseItem = {
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  export type PurchaseItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    purchaseId: number | null
  }

  export type PurchaseItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    purchaseId: number | null
  }

  export type PurchaseItemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    purchaseId: number | null
  }

  export type PurchaseItemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    purchaseId: number | null
  }

  export type PurchaseItemCountAggregateOutputType = {
    id: number
    quantity: number
    costPrice: number
    productId: number
    purchaseId: number
    _all: number
  }


  export type PurchaseItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    purchaseId?: true
  }

  export type PurchaseItemSumAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    purchaseId?: true
  }

  export type PurchaseItemMinAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    purchaseId?: true
  }

  export type PurchaseItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    purchaseId?: true
  }

  export type PurchaseItemCountAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    purchaseId?: true
    _all?: true
  }

  export type PurchaseItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItem to aggregate.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseItems
    **/
    _count?: true | PurchaseItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type GetPurchaseItemAggregateType<T extends PurchaseItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseItem[P]>
      : GetScalarType<T[P], AggregatePurchaseItem[P]>
  }




  export type PurchaseItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseItemWhereInput
    orderBy?: PurchaseItemOrderByWithAggregationInput | PurchaseItemOrderByWithAggregationInput[]
    by: PurchaseItemScalarFieldEnum[] | PurchaseItemScalarFieldEnum
    having?: PurchaseItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseItemCountAggregateInputType | true
    _avg?: PurchaseItemAvgAggregateInputType
    _sum?: PurchaseItemSumAggregateInputType
    _min?: PurchaseItemMinAggregateInputType
    _max?: PurchaseItemMaxAggregateInputType
  }

  export type PurchaseItemGroupByOutputType = {
    id: number
    quantity: number
    costPrice: number
    productId: number
    purchaseId: number
    _count: PurchaseItemCountAggregateOutputType | null
    _avg: PurchaseItemAvgAggregateOutputType | null
    _sum: PurchaseItemSumAggregateOutputType | null
    _min: PurchaseItemMinAggregateOutputType | null
    _max: PurchaseItemMaxAggregateOutputType | null
  }

  type GetPurchaseItemGroupByPayload<T extends PurchaseItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseItemGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    costPrice?: boolean
    productId?: boolean
    purchaseId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    costPrice?: boolean
    productId?: boolean
    purchaseId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseItem"]>

  export type PurchaseItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    costPrice?: boolean
    productId?: boolean
    purchaseId?: boolean
  }

  export type PurchaseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }
  export type PurchaseItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    purchase?: boolean | PurchaseDefaultArgs<ExtArgs>
  }

  export type $PurchaseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      costPrice: number
      productId: number
      purchaseId: number
    }, ExtArgs["result"]["purchaseItem"]>
    composites: {}
  }

  type PurchaseItemGetPayload<S extends boolean | null | undefined | PurchaseItemDefaultArgs> = $Result.GetResult<Prisma.$PurchaseItemPayload, S>

  type PurchaseItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PurchaseItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PurchaseItemCountAggregateInputType | true
    }

  export interface PurchaseItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseItem'], meta: { name: 'PurchaseItem' } }
    /**
     * Find zero or one PurchaseItem that matches the filter.
     * @param {PurchaseItemFindUniqueArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseItemFindUniqueArgs>(args: SelectSubset<T, PurchaseItemFindUniqueArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PurchaseItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PurchaseItemFindUniqueOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PurchaseItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseItemFindFirstArgs>(args?: SelectSubset<T, PurchaseItemFindFirstArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PurchaseItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindFirstOrThrowArgs} args - Arguments to find a PurchaseItem
     * @example
     * // Get one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PurchaseItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany()
     * 
     * // Get first 10 PurchaseItems
     * const purchaseItems = await prisma.purchaseItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseItemFindManyArgs>(args?: SelectSubset<T, PurchaseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PurchaseItem.
     * @param {PurchaseItemCreateArgs} args - Arguments to create a PurchaseItem.
     * @example
     * // Create one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.create({
     *   data: {
     *     // ... data to create a PurchaseItem
     *   }
     * })
     * 
     */
    create<T extends PurchaseItemCreateArgs>(args: SelectSubset<T, PurchaseItemCreateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PurchaseItems.
     * @param {PurchaseItemCreateManyArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseItemCreateManyArgs>(args?: SelectSubset<T, PurchaseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseItems and returns the data saved in the database.
     * @param {PurchaseItemCreateManyAndReturnArgs} args - Arguments to create many PurchaseItems.
     * @example
     * // Create many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseItems and only return the `id`
     * const purchaseItemWithIdOnly = await prisma.purchaseItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PurchaseItem.
     * @param {PurchaseItemDeleteArgs} args - Arguments to delete one PurchaseItem.
     * @example
     * // Delete one PurchaseItem
     * const PurchaseItem = await prisma.purchaseItem.delete({
     *   where: {
     *     // ... filter to delete one PurchaseItem
     *   }
     * })
     * 
     */
    delete<T extends PurchaseItemDeleteArgs>(args: SelectSubset<T, PurchaseItemDeleteArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PurchaseItem.
     * @param {PurchaseItemUpdateArgs} args - Arguments to update one PurchaseItem.
     * @example
     * // Update one PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseItemUpdateArgs>(args: SelectSubset<T, PurchaseItemUpdateArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PurchaseItems.
     * @param {PurchaseItemDeleteManyArgs} args - Arguments to filter PurchaseItems to delete.
     * @example
     * // Delete a few PurchaseItems
     * const { count } = await prisma.purchaseItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseItemDeleteManyArgs>(args?: SelectSubset<T, PurchaseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseItems
     * const purchaseItem = await prisma.purchaseItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseItemUpdateManyArgs>(args: SelectSubset<T, PurchaseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PurchaseItem.
     * @param {PurchaseItemUpsertArgs} args - Arguments to update or create a PurchaseItem.
     * @example
     * // Update or create a PurchaseItem
     * const purchaseItem = await prisma.purchaseItem.upsert({
     *   create: {
     *     // ... data to create a PurchaseItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseItem we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseItemUpsertArgs>(args: SelectSubset<T, PurchaseItemUpsertArgs<ExtArgs>>): Prisma__PurchaseItemClient<$Result.GetResult<Prisma.$PurchaseItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PurchaseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemCountArgs} args - Arguments to filter PurchaseItems to count.
     * @example
     * // Count the number of PurchaseItems
     * const count = await prisma.purchaseItem.count({
     *   where: {
     *     // ... the filter for the PurchaseItems we want to count
     *   }
     * })
    **/
    count<T extends PurchaseItemCountArgs>(
      args?: Subset<T, PurchaseItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchaseItemAggregateArgs>(args: Subset<T, PurchaseItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseItemAggregateType<T>>

    /**
     * Group by PurchaseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseItemGroupByArgs} args - Group by arguments.
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
      T extends PurchaseItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseItemGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchaseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseItem model
   */
  readonly fields: PurchaseItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    purchase<T extends PurchaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseDefaultArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PurchaseItem model
   */ 
  interface PurchaseItemFieldRefs {
    readonly id: FieldRef<"PurchaseItem", 'Int'>
    readonly quantity: FieldRef<"PurchaseItem", 'Int'>
    readonly costPrice: FieldRef<"PurchaseItem", 'Float'>
    readonly productId: FieldRef<"PurchaseItem", 'Int'>
    readonly purchaseId: FieldRef<"PurchaseItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseItem findUnique
   */
  export type PurchaseItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findUniqueOrThrow
   */
  export type PurchaseItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem findFirst
   */
  export type PurchaseItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findFirstOrThrow
   */
  export type PurchaseItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItem to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseItems.
     */
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem findMany
   */
  export type PurchaseItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseItems to fetch.
     */
    where?: PurchaseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseItems to fetch.
     */
    orderBy?: PurchaseItemOrderByWithRelationInput | PurchaseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseItems.
     */
    cursor?: PurchaseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseItems.
     */
    skip?: number
    distinct?: PurchaseItemScalarFieldEnum | PurchaseItemScalarFieldEnum[]
  }

  /**
   * PurchaseItem create
   */
  export type PurchaseItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseItem.
     */
    data: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
  }

  /**
   * PurchaseItem createMany
   */
  export type PurchaseItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
  }

  /**
   * PurchaseItem createManyAndReturn
   */
  export type PurchaseItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PurchaseItems.
     */
    data: PurchaseItemCreateManyInput | PurchaseItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseItem update
   */
  export type PurchaseItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseItem.
     */
    data: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
    /**
     * Choose, which PurchaseItem to update.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem updateMany
   */
  export type PurchaseItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseItems.
     */
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseItems to update
     */
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseItem upsert
   */
  export type PurchaseItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseItem to update in case it exists.
     */
    where: PurchaseItemWhereUniqueInput
    /**
     * In case the PurchaseItem found by the `where` argument doesn't exist, create a new PurchaseItem with this data.
     */
    create: XOR<PurchaseItemCreateInput, PurchaseItemUncheckedCreateInput>
    /**
     * In case the PurchaseItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseItemUpdateInput, PurchaseItemUncheckedUpdateInput>
  }

  /**
   * PurchaseItem delete
   */
  export type PurchaseItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
    /**
     * Filter which PurchaseItem to delete.
     */
    where: PurchaseItemWhereUniqueInput
  }

  /**
   * PurchaseItem deleteMany
   */
  export type PurchaseItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseItems to delete
     */
    where?: PurchaseItemWhereInput
  }

  /**
   * PurchaseItem without action
   */
  export type PurchaseItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseItem
     */
    select?: PurchaseItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseItemInclude<ExtArgs> | null
  }


  /**
   * Model ReturnInward
   */

  export type AggregateReturnInward = {
    _count: ReturnInwardCountAggregateOutputType | null
    _avg: ReturnInwardAvgAggregateOutputType | null
    _sum: ReturnInwardSumAggregateOutputType | null
    _min: ReturnInwardMinAggregateOutputType | null
    _max: ReturnInwardMaxAggregateOutputType | null
  }

  export type ReturnInwardAvgAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    saleId: number | null
  }

  export type ReturnInwardSumAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    saleId: number | null
  }

  export type ReturnInwardMinAggregateOutputType = {
    id: number | null
    reason: string | null
    totalAmount: number | null
    createdAt: Date | null
    saleId: number | null
  }

  export type ReturnInwardMaxAggregateOutputType = {
    id: number | null
    reason: string | null
    totalAmount: number | null
    createdAt: Date | null
    saleId: number | null
  }

  export type ReturnInwardCountAggregateOutputType = {
    id: number
    reason: number
    totalAmount: number
    createdAt: number
    saleId: number
    _all: number
  }


  export type ReturnInwardAvgAggregateInputType = {
    id?: true
    totalAmount?: true
    saleId?: true
  }

  export type ReturnInwardSumAggregateInputType = {
    id?: true
    totalAmount?: true
    saleId?: true
  }

  export type ReturnInwardMinAggregateInputType = {
    id?: true
    reason?: true
    totalAmount?: true
    createdAt?: true
    saleId?: true
  }

  export type ReturnInwardMaxAggregateInputType = {
    id?: true
    reason?: true
    totalAmount?: true
    createdAt?: true
    saleId?: true
  }

  export type ReturnInwardCountAggregateInputType = {
    id?: true
    reason?: true
    totalAmount?: true
    createdAt?: true
    saleId?: true
    _all?: true
  }

  export type ReturnInwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnInward to aggregate.
     */
    where?: ReturnInwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwards to fetch.
     */
    orderBy?: ReturnInwardOrderByWithRelationInput | ReturnInwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnInwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnInwards
    **/
    _count?: true | ReturnInwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReturnInwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReturnInwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnInwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnInwardMaxAggregateInputType
  }

  export type GetReturnInwardAggregateType<T extends ReturnInwardAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnInward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnInward[P]>
      : GetScalarType<T[P], AggregateReturnInward[P]>
  }




  export type ReturnInwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnInwardWhereInput
    orderBy?: ReturnInwardOrderByWithAggregationInput | ReturnInwardOrderByWithAggregationInput[]
    by: ReturnInwardScalarFieldEnum[] | ReturnInwardScalarFieldEnum
    having?: ReturnInwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnInwardCountAggregateInputType | true
    _avg?: ReturnInwardAvgAggregateInputType
    _sum?: ReturnInwardSumAggregateInputType
    _min?: ReturnInwardMinAggregateInputType
    _max?: ReturnInwardMaxAggregateInputType
  }

  export type ReturnInwardGroupByOutputType = {
    id: number
    reason: string
    totalAmount: number
    createdAt: Date
    saleId: number | null
    _count: ReturnInwardCountAggregateOutputType | null
    _avg: ReturnInwardAvgAggregateOutputType | null
    _sum: ReturnInwardSumAggregateOutputType | null
    _min: ReturnInwardMinAggregateOutputType | null
    _max: ReturnInwardMaxAggregateOutputType | null
  }

  type GetReturnInwardGroupByPayload<T extends ReturnInwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnInwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnInwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnInwardGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnInwardGroupByOutputType[P]>
        }
      >
    >


  export type ReturnInwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    saleId?: boolean
    sale?: boolean | ReturnInward$saleArgs<ExtArgs>
    items?: boolean | ReturnInward$itemsArgs<ExtArgs>
    _count?: boolean | ReturnInwardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnInward"]>

  export type ReturnInwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    saleId?: boolean
    sale?: boolean | ReturnInward$saleArgs<ExtArgs>
  }, ExtArgs["result"]["returnInward"]>

  export type ReturnInwardSelectScalar = {
    id?: boolean
    reason?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    saleId?: boolean
  }

  export type ReturnInwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | ReturnInward$saleArgs<ExtArgs>
    items?: boolean | ReturnInward$itemsArgs<ExtArgs>
    _count?: boolean | ReturnInwardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReturnInwardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | ReturnInward$saleArgs<ExtArgs>
  }

  export type $ReturnInwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnInward"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs> | null
      items: Prisma.$ReturnInwardItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reason: string
      totalAmount: number
      createdAt: Date
      saleId: number | null
    }, ExtArgs["result"]["returnInward"]>
    composites: {}
  }

  type ReturnInwardGetPayload<S extends boolean | null | undefined | ReturnInwardDefaultArgs> = $Result.GetResult<Prisma.$ReturnInwardPayload, S>

  type ReturnInwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReturnInwardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReturnInwardCountAggregateInputType | true
    }

  export interface ReturnInwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnInward'], meta: { name: 'ReturnInward' } }
    /**
     * Find zero or one ReturnInward that matches the filter.
     * @param {ReturnInwardFindUniqueArgs} args - Arguments to find a ReturnInward
     * @example
     * // Get one ReturnInward
     * const returnInward = await prisma.returnInward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnInwardFindUniqueArgs>(args: SelectSubset<T, ReturnInwardFindUniqueArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReturnInward that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReturnInwardFindUniqueOrThrowArgs} args - Arguments to find a ReturnInward
     * @example
     * // Get one ReturnInward
     * const returnInward = await prisma.returnInward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnInwardFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnInwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReturnInward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardFindFirstArgs} args - Arguments to find a ReturnInward
     * @example
     * // Get one ReturnInward
     * const returnInward = await prisma.returnInward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnInwardFindFirstArgs>(args?: SelectSubset<T, ReturnInwardFindFirstArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReturnInward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardFindFirstOrThrowArgs} args - Arguments to find a ReturnInward
     * @example
     * // Get one ReturnInward
     * const returnInward = await prisma.returnInward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnInwardFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnInwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReturnInwards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnInwards
     * const returnInwards = await prisma.returnInward.findMany()
     * 
     * // Get first 10 ReturnInwards
     * const returnInwards = await prisma.returnInward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnInwardWithIdOnly = await prisma.returnInward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnInwardFindManyArgs>(args?: SelectSubset<T, ReturnInwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReturnInward.
     * @param {ReturnInwardCreateArgs} args - Arguments to create a ReturnInward.
     * @example
     * // Create one ReturnInward
     * const ReturnInward = await prisma.returnInward.create({
     *   data: {
     *     // ... data to create a ReturnInward
     *   }
     * })
     * 
     */
    create<T extends ReturnInwardCreateArgs>(args: SelectSubset<T, ReturnInwardCreateArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReturnInwards.
     * @param {ReturnInwardCreateManyArgs} args - Arguments to create many ReturnInwards.
     * @example
     * // Create many ReturnInwards
     * const returnInward = await prisma.returnInward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnInwardCreateManyArgs>(args?: SelectSubset<T, ReturnInwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnInwards and returns the data saved in the database.
     * @param {ReturnInwardCreateManyAndReturnArgs} args - Arguments to create many ReturnInwards.
     * @example
     * // Create many ReturnInwards
     * const returnInward = await prisma.returnInward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnInwards and only return the `id`
     * const returnInwardWithIdOnly = await prisma.returnInward.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnInwardCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnInwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReturnInward.
     * @param {ReturnInwardDeleteArgs} args - Arguments to delete one ReturnInward.
     * @example
     * // Delete one ReturnInward
     * const ReturnInward = await prisma.returnInward.delete({
     *   where: {
     *     // ... filter to delete one ReturnInward
     *   }
     * })
     * 
     */
    delete<T extends ReturnInwardDeleteArgs>(args: SelectSubset<T, ReturnInwardDeleteArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReturnInward.
     * @param {ReturnInwardUpdateArgs} args - Arguments to update one ReturnInward.
     * @example
     * // Update one ReturnInward
     * const returnInward = await prisma.returnInward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnInwardUpdateArgs>(args: SelectSubset<T, ReturnInwardUpdateArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReturnInwards.
     * @param {ReturnInwardDeleteManyArgs} args - Arguments to filter ReturnInwards to delete.
     * @example
     * // Delete a few ReturnInwards
     * const { count } = await prisma.returnInward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnInwardDeleteManyArgs>(args?: SelectSubset<T, ReturnInwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnInwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnInwards
     * const returnInward = await prisma.returnInward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnInwardUpdateManyArgs>(args: SelectSubset<T, ReturnInwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReturnInward.
     * @param {ReturnInwardUpsertArgs} args - Arguments to update or create a ReturnInward.
     * @example
     * // Update or create a ReturnInward
     * const returnInward = await prisma.returnInward.upsert({
     *   create: {
     *     // ... data to create a ReturnInward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnInward we want to update
     *   }
     * })
     */
    upsert<T extends ReturnInwardUpsertArgs>(args: SelectSubset<T, ReturnInwardUpsertArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReturnInwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardCountArgs} args - Arguments to filter ReturnInwards to count.
     * @example
     * // Count the number of ReturnInwards
     * const count = await prisma.returnInward.count({
     *   where: {
     *     // ... the filter for the ReturnInwards we want to count
     *   }
     * })
    **/
    count<T extends ReturnInwardCountArgs>(
      args?: Subset<T, ReturnInwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnInwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnInward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReturnInwardAggregateArgs>(args: Subset<T, ReturnInwardAggregateArgs>): Prisma.PrismaPromise<GetReturnInwardAggregateType<T>>

    /**
     * Group by ReturnInward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardGroupByArgs} args - Group by arguments.
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
      T extends ReturnInwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnInwardGroupByArgs['orderBy'] }
        : { orderBy?: ReturnInwardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReturnInwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnInwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnInward model
   */
  readonly fields: ReturnInwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnInward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnInwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends ReturnInward$saleArgs<ExtArgs> = {}>(args?: Subset<T, ReturnInward$saleArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends ReturnInward$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ReturnInward$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ReturnInward model
   */ 
  interface ReturnInwardFieldRefs {
    readonly id: FieldRef<"ReturnInward", 'Int'>
    readonly reason: FieldRef<"ReturnInward", 'String'>
    readonly totalAmount: FieldRef<"ReturnInward", 'Float'>
    readonly createdAt: FieldRef<"ReturnInward", 'DateTime'>
    readonly saleId: FieldRef<"ReturnInward", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReturnInward findUnique
   */
  export type ReturnInwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInward to fetch.
     */
    where: ReturnInwardWhereUniqueInput
  }

  /**
   * ReturnInward findUniqueOrThrow
   */
  export type ReturnInwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInward to fetch.
     */
    where: ReturnInwardWhereUniqueInput
  }

  /**
   * ReturnInward findFirst
   */
  export type ReturnInwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInward to fetch.
     */
    where?: ReturnInwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwards to fetch.
     */
    orderBy?: ReturnInwardOrderByWithRelationInput | ReturnInwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnInwards.
     */
    cursor?: ReturnInwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnInwards.
     */
    distinct?: ReturnInwardScalarFieldEnum | ReturnInwardScalarFieldEnum[]
  }

  /**
   * ReturnInward findFirstOrThrow
   */
  export type ReturnInwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInward to fetch.
     */
    where?: ReturnInwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwards to fetch.
     */
    orderBy?: ReturnInwardOrderByWithRelationInput | ReturnInwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnInwards.
     */
    cursor?: ReturnInwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnInwards.
     */
    distinct?: ReturnInwardScalarFieldEnum | ReturnInwardScalarFieldEnum[]
  }

  /**
   * ReturnInward findMany
   */
  export type ReturnInwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInwards to fetch.
     */
    where?: ReturnInwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwards to fetch.
     */
    orderBy?: ReturnInwardOrderByWithRelationInput | ReturnInwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnInwards.
     */
    cursor?: ReturnInwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwards.
     */
    skip?: number
    distinct?: ReturnInwardScalarFieldEnum | ReturnInwardScalarFieldEnum[]
  }

  /**
   * ReturnInward create
   */
  export type ReturnInwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * The data needed to create a ReturnInward.
     */
    data: XOR<ReturnInwardCreateInput, ReturnInwardUncheckedCreateInput>
  }

  /**
   * ReturnInward createMany
   */
  export type ReturnInwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnInwards.
     */
    data: ReturnInwardCreateManyInput | ReturnInwardCreateManyInput[]
  }

  /**
   * ReturnInward createManyAndReturn
   */
  export type ReturnInwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReturnInwards.
     */
    data: ReturnInwardCreateManyInput | ReturnInwardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReturnInward update
   */
  export type ReturnInwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * The data needed to update a ReturnInward.
     */
    data: XOR<ReturnInwardUpdateInput, ReturnInwardUncheckedUpdateInput>
    /**
     * Choose, which ReturnInward to update.
     */
    where: ReturnInwardWhereUniqueInput
  }

  /**
   * ReturnInward updateMany
   */
  export type ReturnInwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnInwards.
     */
    data: XOR<ReturnInwardUpdateManyMutationInput, ReturnInwardUncheckedUpdateManyInput>
    /**
     * Filter which ReturnInwards to update
     */
    where?: ReturnInwardWhereInput
  }

  /**
   * ReturnInward upsert
   */
  export type ReturnInwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * The filter to search for the ReturnInward to update in case it exists.
     */
    where: ReturnInwardWhereUniqueInput
    /**
     * In case the ReturnInward found by the `where` argument doesn't exist, create a new ReturnInward with this data.
     */
    create: XOR<ReturnInwardCreateInput, ReturnInwardUncheckedCreateInput>
    /**
     * In case the ReturnInward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnInwardUpdateInput, ReturnInwardUncheckedUpdateInput>
  }

  /**
   * ReturnInward delete
   */
  export type ReturnInwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
    /**
     * Filter which ReturnInward to delete.
     */
    where: ReturnInwardWhereUniqueInput
  }

  /**
   * ReturnInward deleteMany
   */
  export type ReturnInwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnInwards to delete
     */
    where?: ReturnInwardWhereInput
  }

  /**
   * ReturnInward.sale
   */
  export type ReturnInward$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
  }

  /**
   * ReturnInward.items
   */
  export type ReturnInward$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    where?: ReturnInwardItemWhereInput
    orderBy?: ReturnInwardItemOrderByWithRelationInput | ReturnInwardItemOrderByWithRelationInput[]
    cursor?: ReturnInwardItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnInwardItemScalarFieldEnum | ReturnInwardItemScalarFieldEnum[]
  }

  /**
   * ReturnInward without action
   */
  export type ReturnInwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInward
     */
    select?: ReturnInwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardInclude<ExtArgs> | null
  }


  /**
   * Model ReturnInwardItem
   */

  export type AggregateReturnInwardItem = {
    _count: ReturnInwardItemCountAggregateOutputType | null
    _avg: ReturnInwardItemAvgAggregateOutputType | null
    _sum: ReturnInwardItemSumAggregateOutputType | null
    _min: ReturnInwardItemMinAggregateOutputType | null
    _max: ReturnInwardItemMaxAggregateOutputType | null
  }

  export type ReturnInwardItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    productId: number | null
    returnInwardId: number | null
  }

  export type ReturnInwardItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    productId: number | null
    returnInwardId: number | null
  }

  export type ReturnInwardItemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    productId: number | null
    returnInwardId: number | null
  }

  export type ReturnInwardItemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    price: number | null
    productId: number | null
    returnInwardId: number | null
  }

  export type ReturnInwardItemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    productId: number
    returnInwardId: number
    _all: number
  }


  export type ReturnInwardItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    productId?: true
    returnInwardId?: true
  }

  export type ReturnInwardItemSumAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    productId?: true
    returnInwardId?: true
  }

  export type ReturnInwardItemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    productId?: true
    returnInwardId?: true
  }

  export type ReturnInwardItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    productId?: true
    returnInwardId?: true
  }

  export type ReturnInwardItemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    productId?: true
    returnInwardId?: true
    _all?: true
  }

  export type ReturnInwardItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnInwardItem to aggregate.
     */
    where?: ReturnInwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwardItems to fetch.
     */
    orderBy?: ReturnInwardItemOrderByWithRelationInput | ReturnInwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnInwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnInwardItems
    **/
    _count?: true | ReturnInwardItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReturnInwardItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReturnInwardItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnInwardItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnInwardItemMaxAggregateInputType
  }

  export type GetReturnInwardItemAggregateType<T extends ReturnInwardItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnInwardItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnInwardItem[P]>
      : GetScalarType<T[P], AggregateReturnInwardItem[P]>
  }




  export type ReturnInwardItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnInwardItemWhereInput
    orderBy?: ReturnInwardItemOrderByWithAggregationInput | ReturnInwardItemOrderByWithAggregationInput[]
    by: ReturnInwardItemScalarFieldEnum[] | ReturnInwardItemScalarFieldEnum
    having?: ReturnInwardItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnInwardItemCountAggregateInputType | true
    _avg?: ReturnInwardItemAvgAggregateInputType
    _sum?: ReturnInwardItemSumAggregateInputType
    _min?: ReturnInwardItemMinAggregateInputType
    _max?: ReturnInwardItemMaxAggregateInputType
  }

  export type ReturnInwardItemGroupByOutputType = {
    id: number
    quantity: number
    price: number
    productId: number
    returnInwardId: number
    _count: ReturnInwardItemCountAggregateOutputType | null
    _avg: ReturnInwardItemAvgAggregateOutputType | null
    _sum: ReturnInwardItemSumAggregateOutputType | null
    _min: ReturnInwardItemMinAggregateOutputType | null
    _max: ReturnInwardItemMaxAggregateOutputType | null
  }

  type GetReturnInwardItemGroupByPayload<T extends ReturnInwardItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnInwardItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnInwardItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnInwardItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnInwardItemGroupByOutputType[P]>
        }
      >
    >


  export type ReturnInwardItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
    returnInwardId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnInward?: boolean | ReturnInwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnInwardItem"]>

  export type ReturnInwardItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
    returnInwardId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnInward?: boolean | ReturnInwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnInwardItem"]>

  export type ReturnInwardItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    productId?: boolean
    returnInwardId?: boolean
  }

  export type ReturnInwardItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnInward?: boolean | ReturnInwardDefaultArgs<ExtArgs>
  }
  export type ReturnInwardItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnInward?: boolean | ReturnInwardDefaultArgs<ExtArgs>
  }

  export type $ReturnInwardItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnInwardItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      returnInward: Prisma.$ReturnInwardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      price: number
      productId: number
      returnInwardId: number
    }, ExtArgs["result"]["returnInwardItem"]>
    composites: {}
  }

  type ReturnInwardItemGetPayload<S extends boolean | null | undefined | ReturnInwardItemDefaultArgs> = $Result.GetResult<Prisma.$ReturnInwardItemPayload, S>

  type ReturnInwardItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReturnInwardItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReturnInwardItemCountAggregateInputType | true
    }

  export interface ReturnInwardItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnInwardItem'], meta: { name: 'ReturnInwardItem' } }
    /**
     * Find zero or one ReturnInwardItem that matches the filter.
     * @param {ReturnInwardItemFindUniqueArgs} args - Arguments to find a ReturnInwardItem
     * @example
     * // Get one ReturnInwardItem
     * const returnInwardItem = await prisma.returnInwardItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnInwardItemFindUniqueArgs>(args: SelectSubset<T, ReturnInwardItemFindUniqueArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReturnInwardItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReturnInwardItemFindUniqueOrThrowArgs} args - Arguments to find a ReturnInwardItem
     * @example
     * // Get one ReturnInwardItem
     * const returnInwardItem = await prisma.returnInwardItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnInwardItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnInwardItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReturnInwardItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemFindFirstArgs} args - Arguments to find a ReturnInwardItem
     * @example
     * // Get one ReturnInwardItem
     * const returnInwardItem = await prisma.returnInwardItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnInwardItemFindFirstArgs>(args?: SelectSubset<T, ReturnInwardItemFindFirstArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReturnInwardItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemFindFirstOrThrowArgs} args - Arguments to find a ReturnInwardItem
     * @example
     * // Get one ReturnInwardItem
     * const returnInwardItem = await prisma.returnInwardItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnInwardItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnInwardItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReturnInwardItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnInwardItems
     * const returnInwardItems = await prisma.returnInwardItem.findMany()
     * 
     * // Get first 10 ReturnInwardItems
     * const returnInwardItems = await prisma.returnInwardItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnInwardItemWithIdOnly = await prisma.returnInwardItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnInwardItemFindManyArgs>(args?: SelectSubset<T, ReturnInwardItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReturnInwardItem.
     * @param {ReturnInwardItemCreateArgs} args - Arguments to create a ReturnInwardItem.
     * @example
     * // Create one ReturnInwardItem
     * const ReturnInwardItem = await prisma.returnInwardItem.create({
     *   data: {
     *     // ... data to create a ReturnInwardItem
     *   }
     * })
     * 
     */
    create<T extends ReturnInwardItemCreateArgs>(args: SelectSubset<T, ReturnInwardItemCreateArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReturnInwardItems.
     * @param {ReturnInwardItemCreateManyArgs} args - Arguments to create many ReturnInwardItems.
     * @example
     * // Create many ReturnInwardItems
     * const returnInwardItem = await prisma.returnInwardItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnInwardItemCreateManyArgs>(args?: SelectSubset<T, ReturnInwardItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnInwardItems and returns the data saved in the database.
     * @param {ReturnInwardItemCreateManyAndReturnArgs} args - Arguments to create many ReturnInwardItems.
     * @example
     * // Create many ReturnInwardItems
     * const returnInwardItem = await prisma.returnInwardItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnInwardItems and only return the `id`
     * const returnInwardItemWithIdOnly = await prisma.returnInwardItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnInwardItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnInwardItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReturnInwardItem.
     * @param {ReturnInwardItemDeleteArgs} args - Arguments to delete one ReturnInwardItem.
     * @example
     * // Delete one ReturnInwardItem
     * const ReturnInwardItem = await prisma.returnInwardItem.delete({
     *   where: {
     *     // ... filter to delete one ReturnInwardItem
     *   }
     * })
     * 
     */
    delete<T extends ReturnInwardItemDeleteArgs>(args: SelectSubset<T, ReturnInwardItemDeleteArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReturnInwardItem.
     * @param {ReturnInwardItemUpdateArgs} args - Arguments to update one ReturnInwardItem.
     * @example
     * // Update one ReturnInwardItem
     * const returnInwardItem = await prisma.returnInwardItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnInwardItemUpdateArgs>(args: SelectSubset<T, ReturnInwardItemUpdateArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReturnInwardItems.
     * @param {ReturnInwardItemDeleteManyArgs} args - Arguments to filter ReturnInwardItems to delete.
     * @example
     * // Delete a few ReturnInwardItems
     * const { count } = await prisma.returnInwardItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnInwardItemDeleteManyArgs>(args?: SelectSubset<T, ReturnInwardItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnInwardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnInwardItems
     * const returnInwardItem = await prisma.returnInwardItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnInwardItemUpdateManyArgs>(args: SelectSubset<T, ReturnInwardItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReturnInwardItem.
     * @param {ReturnInwardItemUpsertArgs} args - Arguments to update or create a ReturnInwardItem.
     * @example
     * // Update or create a ReturnInwardItem
     * const returnInwardItem = await prisma.returnInwardItem.upsert({
     *   create: {
     *     // ... data to create a ReturnInwardItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnInwardItem we want to update
     *   }
     * })
     */
    upsert<T extends ReturnInwardItemUpsertArgs>(args: SelectSubset<T, ReturnInwardItemUpsertArgs<ExtArgs>>): Prisma__ReturnInwardItemClient<$Result.GetResult<Prisma.$ReturnInwardItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReturnInwardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemCountArgs} args - Arguments to filter ReturnInwardItems to count.
     * @example
     * // Count the number of ReturnInwardItems
     * const count = await prisma.returnInwardItem.count({
     *   where: {
     *     // ... the filter for the ReturnInwardItems we want to count
     *   }
     * })
    **/
    count<T extends ReturnInwardItemCountArgs>(
      args?: Subset<T, ReturnInwardItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnInwardItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnInwardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReturnInwardItemAggregateArgs>(args: Subset<T, ReturnInwardItemAggregateArgs>): Prisma.PrismaPromise<GetReturnInwardItemAggregateType<T>>

    /**
     * Group by ReturnInwardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnInwardItemGroupByArgs} args - Group by arguments.
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
      T extends ReturnInwardItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnInwardItemGroupByArgs['orderBy'] }
        : { orderBy?: ReturnInwardItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReturnInwardItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnInwardItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnInwardItem model
   */
  readonly fields: ReturnInwardItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnInwardItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnInwardItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    returnInward<T extends ReturnInwardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReturnInwardDefaultArgs<ExtArgs>>): Prisma__ReturnInwardClient<$Result.GetResult<Prisma.$ReturnInwardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ReturnInwardItem model
   */ 
  interface ReturnInwardItemFieldRefs {
    readonly id: FieldRef<"ReturnInwardItem", 'Int'>
    readonly quantity: FieldRef<"ReturnInwardItem", 'Int'>
    readonly price: FieldRef<"ReturnInwardItem", 'Float'>
    readonly productId: FieldRef<"ReturnInwardItem", 'Int'>
    readonly returnInwardId: FieldRef<"ReturnInwardItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReturnInwardItem findUnique
   */
  export type ReturnInwardItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInwardItem to fetch.
     */
    where: ReturnInwardItemWhereUniqueInput
  }

  /**
   * ReturnInwardItem findUniqueOrThrow
   */
  export type ReturnInwardItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInwardItem to fetch.
     */
    where: ReturnInwardItemWhereUniqueInput
  }

  /**
   * ReturnInwardItem findFirst
   */
  export type ReturnInwardItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInwardItem to fetch.
     */
    where?: ReturnInwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwardItems to fetch.
     */
    orderBy?: ReturnInwardItemOrderByWithRelationInput | ReturnInwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnInwardItems.
     */
    cursor?: ReturnInwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnInwardItems.
     */
    distinct?: ReturnInwardItemScalarFieldEnum | ReturnInwardItemScalarFieldEnum[]
  }

  /**
   * ReturnInwardItem findFirstOrThrow
   */
  export type ReturnInwardItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInwardItem to fetch.
     */
    where?: ReturnInwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwardItems to fetch.
     */
    orderBy?: ReturnInwardItemOrderByWithRelationInput | ReturnInwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnInwardItems.
     */
    cursor?: ReturnInwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnInwardItems.
     */
    distinct?: ReturnInwardItemScalarFieldEnum | ReturnInwardItemScalarFieldEnum[]
  }

  /**
   * ReturnInwardItem findMany
   */
  export type ReturnInwardItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnInwardItems to fetch.
     */
    where?: ReturnInwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnInwardItems to fetch.
     */
    orderBy?: ReturnInwardItemOrderByWithRelationInput | ReturnInwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnInwardItems.
     */
    cursor?: ReturnInwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnInwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnInwardItems.
     */
    skip?: number
    distinct?: ReturnInwardItemScalarFieldEnum | ReturnInwardItemScalarFieldEnum[]
  }

  /**
   * ReturnInwardItem create
   */
  export type ReturnInwardItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ReturnInwardItem.
     */
    data: XOR<ReturnInwardItemCreateInput, ReturnInwardItemUncheckedCreateInput>
  }

  /**
   * ReturnInwardItem createMany
   */
  export type ReturnInwardItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnInwardItems.
     */
    data: ReturnInwardItemCreateManyInput | ReturnInwardItemCreateManyInput[]
  }

  /**
   * ReturnInwardItem createManyAndReturn
   */
  export type ReturnInwardItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReturnInwardItems.
     */
    data: ReturnInwardItemCreateManyInput | ReturnInwardItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReturnInwardItem update
   */
  export type ReturnInwardItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ReturnInwardItem.
     */
    data: XOR<ReturnInwardItemUpdateInput, ReturnInwardItemUncheckedUpdateInput>
    /**
     * Choose, which ReturnInwardItem to update.
     */
    where: ReturnInwardItemWhereUniqueInput
  }

  /**
   * ReturnInwardItem updateMany
   */
  export type ReturnInwardItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnInwardItems.
     */
    data: XOR<ReturnInwardItemUpdateManyMutationInput, ReturnInwardItemUncheckedUpdateManyInput>
    /**
     * Filter which ReturnInwardItems to update
     */
    where?: ReturnInwardItemWhereInput
  }

  /**
   * ReturnInwardItem upsert
   */
  export type ReturnInwardItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ReturnInwardItem to update in case it exists.
     */
    where: ReturnInwardItemWhereUniqueInput
    /**
     * In case the ReturnInwardItem found by the `where` argument doesn't exist, create a new ReturnInwardItem with this data.
     */
    create: XOR<ReturnInwardItemCreateInput, ReturnInwardItemUncheckedCreateInput>
    /**
     * In case the ReturnInwardItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnInwardItemUpdateInput, ReturnInwardItemUncheckedUpdateInput>
  }

  /**
   * ReturnInwardItem delete
   */
  export type ReturnInwardItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
    /**
     * Filter which ReturnInwardItem to delete.
     */
    where: ReturnInwardItemWhereUniqueInput
  }

  /**
   * ReturnInwardItem deleteMany
   */
  export type ReturnInwardItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnInwardItems to delete
     */
    where?: ReturnInwardItemWhereInput
  }

  /**
   * ReturnInwardItem without action
   */
  export type ReturnInwardItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnInwardItem
     */
    select?: ReturnInwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnInwardItemInclude<ExtArgs> | null
  }


  /**
   * Model ReturnOutward
   */

  export type AggregateReturnOutward = {
    _count: ReturnOutwardCountAggregateOutputType | null
    _avg: ReturnOutwardAvgAggregateOutputType | null
    _sum: ReturnOutwardSumAggregateOutputType | null
    _min: ReturnOutwardMinAggregateOutputType | null
    _max: ReturnOutwardMaxAggregateOutputType | null
  }

  export type ReturnOutwardAvgAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    supplierId: number | null
    purchaseId: number | null
  }

  export type ReturnOutwardSumAggregateOutputType = {
    id: number | null
    totalAmount: number | null
    supplierId: number | null
    purchaseId: number | null
  }

  export type ReturnOutwardMinAggregateOutputType = {
    id: number | null
    reason: string | null
    totalAmount: number | null
    createdAt: Date | null
    supplierId: number | null
    purchaseId: number | null
  }

  export type ReturnOutwardMaxAggregateOutputType = {
    id: number | null
    reason: string | null
    totalAmount: number | null
    createdAt: Date | null
    supplierId: number | null
    purchaseId: number | null
  }

  export type ReturnOutwardCountAggregateOutputType = {
    id: number
    reason: number
    totalAmount: number
    createdAt: number
    supplierId: number
    purchaseId: number
    _all: number
  }


  export type ReturnOutwardAvgAggregateInputType = {
    id?: true
    totalAmount?: true
    supplierId?: true
    purchaseId?: true
  }

  export type ReturnOutwardSumAggregateInputType = {
    id?: true
    totalAmount?: true
    supplierId?: true
    purchaseId?: true
  }

  export type ReturnOutwardMinAggregateInputType = {
    id?: true
    reason?: true
    totalAmount?: true
    createdAt?: true
    supplierId?: true
    purchaseId?: true
  }

  export type ReturnOutwardMaxAggregateInputType = {
    id?: true
    reason?: true
    totalAmount?: true
    createdAt?: true
    supplierId?: true
    purchaseId?: true
  }

  export type ReturnOutwardCountAggregateInputType = {
    id?: true
    reason?: true
    totalAmount?: true
    createdAt?: true
    supplierId?: true
    purchaseId?: true
    _all?: true
  }

  export type ReturnOutwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnOutward to aggregate.
     */
    where?: ReturnOutwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwards to fetch.
     */
    orderBy?: ReturnOutwardOrderByWithRelationInput | ReturnOutwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnOutwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnOutwards
    **/
    _count?: true | ReturnOutwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReturnOutwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReturnOutwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnOutwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnOutwardMaxAggregateInputType
  }

  export type GetReturnOutwardAggregateType<T extends ReturnOutwardAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnOutward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnOutward[P]>
      : GetScalarType<T[P], AggregateReturnOutward[P]>
  }




  export type ReturnOutwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnOutwardWhereInput
    orderBy?: ReturnOutwardOrderByWithAggregationInput | ReturnOutwardOrderByWithAggregationInput[]
    by: ReturnOutwardScalarFieldEnum[] | ReturnOutwardScalarFieldEnum
    having?: ReturnOutwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnOutwardCountAggregateInputType | true
    _avg?: ReturnOutwardAvgAggregateInputType
    _sum?: ReturnOutwardSumAggregateInputType
    _min?: ReturnOutwardMinAggregateInputType
    _max?: ReturnOutwardMaxAggregateInputType
  }

  export type ReturnOutwardGroupByOutputType = {
    id: number
    reason: string
    totalAmount: number
    createdAt: Date
    supplierId: number
    purchaseId: number | null
    _count: ReturnOutwardCountAggregateOutputType | null
    _avg: ReturnOutwardAvgAggregateOutputType | null
    _sum: ReturnOutwardSumAggregateOutputType | null
    _min: ReturnOutwardMinAggregateOutputType | null
    _max: ReturnOutwardMaxAggregateOutputType | null
  }

  type GetReturnOutwardGroupByPayload<T extends ReturnOutwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnOutwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnOutwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnOutwardGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnOutwardGroupByOutputType[P]>
        }
      >
    >


  export type ReturnOutwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    supplierId?: boolean
    purchaseId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    purchase?: boolean | ReturnOutward$purchaseArgs<ExtArgs>
    items?: boolean | ReturnOutward$itemsArgs<ExtArgs>
    _count?: boolean | ReturnOutwardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnOutward"]>

  export type ReturnOutwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    supplierId?: boolean
    purchaseId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    purchase?: boolean | ReturnOutward$purchaseArgs<ExtArgs>
  }, ExtArgs["result"]["returnOutward"]>

  export type ReturnOutwardSelectScalar = {
    id?: boolean
    reason?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    supplierId?: boolean
    purchaseId?: boolean
  }

  export type ReturnOutwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    purchase?: boolean | ReturnOutward$purchaseArgs<ExtArgs>
    items?: boolean | ReturnOutward$itemsArgs<ExtArgs>
    _count?: boolean | ReturnOutwardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReturnOutwardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    purchase?: boolean | ReturnOutward$purchaseArgs<ExtArgs>
  }

  export type $ReturnOutwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnOutward"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      purchase: Prisma.$PurchasePayload<ExtArgs> | null
      items: Prisma.$ReturnOutwardItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reason: string
      totalAmount: number
      createdAt: Date
      supplierId: number
      purchaseId: number | null
    }, ExtArgs["result"]["returnOutward"]>
    composites: {}
  }

  type ReturnOutwardGetPayload<S extends boolean | null | undefined | ReturnOutwardDefaultArgs> = $Result.GetResult<Prisma.$ReturnOutwardPayload, S>

  type ReturnOutwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReturnOutwardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReturnOutwardCountAggregateInputType | true
    }

  export interface ReturnOutwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnOutward'], meta: { name: 'ReturnOutward' } }
    /**
     * Find zero or one ReturnOutward that matches the filter.
     * @param {ReturnOutwardFindUniqueArgs} args - Arguments to find a ReturnOutward
     * @example
     * // Get one ReturnOutward
     * const returnOutward = await prisma.returnOutward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnOutwardFindUniqueArgs>(args: SelectSubset<T, ReturnOutwardFindUniqueArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReturnOutward that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReturnOutwardFindUniqueOrThrowArgs} args - Arguments to find a ReturnOutward
     * @example
     * // Get one ReturnOutward
     * const returnOutward = await prisma.returnOutward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnOutwardFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnOutwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReturnOutward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardFindFirstArgs} args - Arguments to find a ReturnOutward
     * @example
     * // Get one ReturnOutward
     * const returnOutward = await prisma.returnOutward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnOutwardFindFirstArgs>(args?: SelectSubset<T, ReturnOutwardFindFirstArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReturnOutward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardFindFirstOrThrowArgs} args - Arguments to find a ReturnOutward
     * @example
     * // Get one ReturnOutward
     * const returnOutward = await prisma.returnOutward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnOutwardFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnOutwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReturnOutwards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnOutwards
     * const returnOutwards = await prisma.returnOutward.findMany()
     * 
     * // Get first 10 ReturnOutwards
     * const returnOutwards = await prisma.returnOutward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnOutwardWithIdOnly = await prisma.returnOutward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnOutwardFindManyArgs>(args?: SelectSubset<T, ReturnOutwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReturnOutward.
     * @param {ReturnOutwardCreateArgs} args - Arguments to create a ReturnOutward.
     * @example
     * // Create one ReturnOutward
     * const ReturnOutward = await prisma.returnOutward.create({
     *   data: {
     *     // ... data to create a ReturnOutward
     *   }
     * })
     * 
     */
    create<T extends ReturnOutwardCreateArgs>(args: SelectSubset<T, ReturnOutwardCreateArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReturnOutwards.
     * @param {ReturnOutwardCreateManyArgs} args - Arguments to create many ReturnOutwards.
     * @example
     * // Create many ReturnOutwards
     * const returnOutward = await prisma.returnOutward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnOutwardCreateManyArgs>(args?: SelectSubset<T, ReturnOutwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnOutwards and returns the data saved in the database.
     * @param {ReturnOutwardCreateManyAndReturnArgs} args - Arguments to create many ReturnOutwards.
     * @example
     * // Create many ReturnOutwards
     * const returnOutward = await prisma.returnOutward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnOutwards and only return the `id`
     * const returnOutwardWithIdOnly = await prisma.returnOutward.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnOutwardCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnOutwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReturnOutward.
     * @param {ReturnOutwardDeleteArgs} args - Arguments to delete one ReturnOutward.
     * @example
     * // Delete one ReturnOutward
     * const ReturnOutward = await prisma.returnOutward.delete({
     *   where: {
     *     // ... filter to delete one ReturnOutward
     *   }
     * })
     * 
     */
    delete<T extends ReturnOutwardDeleteArgs>(args: SelectSubset<T, ReturnOutwardDeleteArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReturnOutward.
     * @param {ReturnOutwardUpdateArgs} args - Arguments to update one ReturnOutward.
     * @example
     * // Update one ReturnOutward
     * const returnOutward = await prisma.returnOutward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnOutwardUpdateArgs>(args: SelectSubset<T, ReturnOutwardUpdateArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReturnOutwards.
     * @param {ReturnOutwardDeleteManyArgs} args - Arguments to filter ReturnOutwards to delete.
     * @example
     * // Delete a few ReturnOutwards
     * const { count } = await prisma.returnOutward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnOutwardDeleteManyArgs>(args?: SelectSubset<T, ReturnOutwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnOutwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnOutwards
     * const returnOutward = await prisma.returnOutward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnOutwardUpdateManyArgs>(args: SelectSubset<T, ReturnOutwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReturnOutward.
     * @param {ReturnOutwardUpsertArgs} args - Arguments to update or create a ReturnOutward.
     * @example
     * // Update or create a ReturnOutward
     * const returnOutward = await prisma.returnOutward.upsert({
     *   create: {
     *     // ... data to create a ReturnOutward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnOutward we want to update
     *   }
     * })
     */
    upsert<T extends ReturnOutwardUpsertArgs>(args: SelectSubset<T, ReturnOutwardUpsertArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReturnOutwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardCountArgs} args - Arguments to filter ReturnOutwards to count.
     * @example
     * // Count the number of ReturnOutwards
     * const count = await prisma.returnOutward.count({
     *   where: {
     *     // ... the filter for the ReturnOutwards we want to count
     *   }
     * })
    **/
    count<T extends ReturnOutwardCountArgs>(
      args?: Subset<T, ReturnOutwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnOutwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnOutward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReturnOutwardAggregateArgs>(args: Subset<T, ReturnOutwardAggregateArgs>): Prisma.PrismaPromise<GetReturnOutwardAggregateType<T>>

    /**
     * Group by ReturnOutward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardGroupByArgs} args - Group by arguments.
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
      T extends ReturnOutwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnOutwardGroupByArgs['orderBy'] }
        : { orderBy?: ReturnOutwardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReturnOutwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnOutwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnOutward model
   */
  readonly fields: ReturnOutwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnOutward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnOutwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    purchase<T extends ReturnOutward$purchaseArgs<ExtArgs> = {}>(args?: Subset<T, ReturnOutward$purchaseArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends ReturnOutward$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ReturnOutward$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ReturnOutward model
   */ 
  interface ReturnOutwardFieldRefs {
    readonly id: FieldRef<"ReturnOutward", 'Int'>
    readonly reason: FieldRef<"ReturnOutward", 'String'>
    readonly totalAmount: FieldRef<"ReturnOutward", 'Float'>
    readonly createdAt: FieldRef<"ReturnOutward", 'DateTime'>
    readonly supplierId: FieldRef<"ReturnOutward", 'Int'>
    readonly purchaseId: FieldRef<"ReturnOutward", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReturnOutward findUnique
   */
  export type ReturnOutwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutward to fetch.
     */
    where: ReturnOutwardWhereUniqueInput
  }

  /**
   * ReturnOutward findUniqueOrThrow
   */
  export type ReturnOutwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutward to fetch.
     */
    where: ReturnOutwardWhereUniqueInput
  }

  /**
   * ReturnOutward findFirst
   */
  export type ReturnOutwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutward to fetch.
     */
    where?: ReturnOutwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwards to fetch.
     */
    orderBy?: ReturnOutwardOrderByWithRelationInput | ReturnOutwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnOutwards.
     */
    cursor?: ReturnOutwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnOutwards.
     */
    distinct?: ReturnOutwardScalarFieldEnum | ReturnOutwardScalarFieldEnum[]
  }

  /**
   * ReturnOutward findFirstOrThrow
   */
  export type ReturnOutwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutward to fetch.
     */
    where?: ReturnOutwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwards to fetch.
     */
    orderBy?: ReturnOutwardOrderByWithRelationInput | ReturnOutwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnOutwards.
     */
    cursor?: ReturnOutwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnOutwards.
     */
    distinct?: ReturnOutwardScalarFieldEnum | ReturnOutwardScalarFieldEnum[]
  }

  /**
   * ReturnOutward findMany
   */
  export type ReturnOutwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutwards to fetch.
     */
    where?: ReturnOutwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwards to fetch.
     */
    orderBy?: ReturnOutwardOrderByWithRelationInput | ReturnOutwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnOutwards.
     */
    cursor?: ReturnOutwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwards.
     */
    skip?: number
    distinct?: ReturnOutwardScalarFieldEnum | ReturnOutwardScalarFieldEnum[]
  }

  /**
   * ReturnOutward create
   */
  export type ReturnOutwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * The data needed to create a ReturnOutward.
     */
    data: XOR<ReturnOutwardCreateInput, ReturnOutwardUncheckedCreateInput>
  }

  /**
   * ReturnOutward createMany
   */
  export type ReturnOutwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnOutwards.
     */
    data: ReturnOutwardCreateManyInput | ReturnOutwardCreateManyInput[]
  }

  /**
   * ReturnOutward createManyAndReturn
   */
  export type ReturnOutwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReturnOutwards.
     */
    data: ReturnOutwardCreateManyInput | ReturnOutwardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReturnOutward update
   */
  export type ReturnOutwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * The data needed to update a ReturnOutward.
     */
    data: XOR<ReturnOutwardUpdateInput, ReturnOutwardUncheckedUpdateInput>
    /**
     * Choose, which ReturnOutward to update.
     */
    where: ReturnOutwardWhereUniqueInput
  }

  /**
   * ReturnOutward updateMany
   */
  export type ReturnOutwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnOutwards.
     */
    data: XOR<ReturnOutwardUpdateManyMutationInput, ReturnOutwardUncheckedUpdateManyInput>
    /**
     * Filter which ReturnOutwards to update
     */
    where?: ReturnOutwardWhereInput
  }

  /**
   * ReturnOutward upsert
   */
  export type ReturnOutwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * The filter to search for the ReturnOutward to update in case it exists.
     */
    where: ReturnOutwardWhereUniqueInput
    /**
     * In case the ReturnOutward found by the `where` argument doesn't exist, create a new ReturnOutward with this data.
     */
    create: XOR<ReturnOutwardCreateInput, ReturnOutwardUncheckedCreateInput>
    /**
     * In case the ReturnOutward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnOutwardUpdateInput, ReturnOutwardUncheckedUpdateInput>
  }

  /**
   * ReturnOutward delete
   */
  export type ReturnOutwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
    /**
     * Filter which ReturnOutward to delete.
     */
    where: ReturnOutwardWhereUniqueInput
  }

  /**
   * ReturnOutward deleteMany
   */
  export type ReturnOutwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnOutwards to delete
     */
    where?: ReturnOutwardWhereInput
  }

  /**
   * ReturnOutward.purchase
   */
  export type ReturnOutward$purchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
  }

  /**
   * ReturnOutward.items
   */
  export type ReturnOutward$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    where?: ReturnOutwardItemWhereInput
    orderBy?: ReturnOutwardItemOrderByWithRelationInput | ReturnOutwardItemOrderByWithRelationInput[]
    cursor?: ReturnOutwardItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReturnOutwardItemScalarFieldEnum | ReturnOutwardItemScalarFieldEnum[]
  }

  /**
   * ReturnOutward without action
   */
  export type ReturnOutwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutward
     */
    select?: ReturnOutwardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardInclude<ExtArgs> | null
  }


  /**
   * Model ReturnOutwardItem
   */

  export type AggregateReturnOutwardItem = {
    _count: ReturnOutwardItemCountAggregateOutputType | null
    _avg: ReturnOutwardItemAvgAggregateOutputType | null
    _sum: ReturnOutwardItemSumAggregateOutputType | null
    _min: ReturnOutwardItemMinAggregateOutputType | null
    _max: ReturnOutwardItemMaxAggregateOutputType | null
  }

  export type ReturnOutwardItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    returnOutwardId: number | null
  }

  export type ReturnOutwardItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    returnOutwardId: number | null
  }

  export type ReturnOutwardItemMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    returnOutwardId: number | null
  }

  export type ReturnOutwardItemMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    costPrice: number | null
    productId: number | null
    returnOutwardId: number | null
  }

  export type ReturnOutwardItemCountAggregateOutputType = {
    id: number
    quantity: number
    costPrice: number
    productId: number
    returnOutwardId: number
    _all: number
  }


  export type ReturnOutwardItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    returnOutwardId?: true
  }

  export type ReturnOutwardItemSumAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    returnOutwardId?: true
  }

  export type ReturnOutwardItemMinAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    returnOutwardId?: true
  }

  export type ReturnOutwardItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    returnOutwardId?: true
  }

  export type ReturnOutwardItemCountAggregateInputType = {
    id?: true
    quantity?: true
    costPrice?: true
    productId?: true
    returnOutwardId?: true
    _all?: true
  }

  export type ReturnOutwardItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnOutwardItem to aggregate.
     */
    where?: ReturnOutwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwardItems to fetch.
     */
    orderBy?: ReturnOutwardItemOrderByWithRelationInput | ReturnOutwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReturnOutwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReturnOutwardItems
    **/
    _count?: true | ReturnOutwardItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReturnOutwardItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReturnOutwardItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReturnOutwardItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReturnOutwardItemMaxAggregateInputType
  }

  export type GetReturnOutwardItemAggregateType<T extends ReturnOutwardItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReturnOutwardItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReturnOutwardItem[P]>
      : GetScalarType<T[P], AggregateReturnOutwardItem[P]>
  }




  export type ReturnOutwardItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReturnOutwardItemWhereInput
    orderBy?: ReturnOutwardItemOrderByWithAggregationInput | ReturnOutwardItemOrderByWithAggregationInput[]
    by: ReturnOutwardItemScalarFieldEnum[] | ReturnOutwardItemScalarFieldEnum
    having?: ReturnOutwardItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReturnOutwardItemCountAggregateInputType | true
    _avg?: ReturnOutwardItemAvgAggregateInputType
    _sum?: ReturnOutwardItemSumAggregateInputType
    _min?: ReturnOutwardItemMinAggregateInputType
    _max?: ReturnOutwardItemMaxAggregateInputType
  }

  export type ReturnOutwardItemGroupByOutputType = {
    id: number
    quantity: number
    costPrice: number
    productId: number
    returnOutwardId: number
    _count: ReturnOutwardItemCountAggregateOutputType | null
    _avg: ReturnOutwardItemAvgAggregateOutputType | null
    _sum: ReturnOutwardItemSumAggregateOutputType | null
    _min: ReturnOutwardItemMinAggregateOutputType | null
    _max: ReturnOutwardItemMaxAggregateOutputType | null
  }

  type GetReturnOutwardItemGroupByPayload<T extends ReturnOutwardItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReturnOutwardItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReturnOutwardItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReturnOutwardItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReturnOutwardItemGroupByOutputType[P]>
        }
      >
    >


  export type ReturnOutwardItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    costPrice?: boolean
    productId?: boolean
    returnOutwardId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnOutward?: boolean | ReturnOutwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnOutwardItem"]>

  export type ReturnOutwardItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    costPrice?: boolean
    productId?: boolean
    returnOutwardId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnOutward?: boolean | ReturnOutwardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["returnOutwardItem"]>

  export type ReturnOutwardItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    costPrice?: boolean
    productId?: boolean
    returnOutwardId?: boolean
  }

  export type ReturnOutwardItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnOutward?: boolean | ReturnOutwardDefaultArgs<ExtArgs>
  }
  export type ReturnOutwardItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    returnOutward?: boolean | ReturnOutwardDefaultArgs<ExtArgs>
  }

  export type $ReturnOutwardItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReturnOutwardItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      returnOutward: Prisma.$ReturnOutwardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      costPrice: number
      productId: number
      returnOutwardId: number
    }, ExtArgs["result"]["returnOutwardItem"]>
    composites: {}
  }

  type ReturnOutwardItemGetPayload<S extends boolean | null | undefined | ReturnOutwardItemDefaultArgs> = $Result.GetResult<Prisma.$ReturnOutwardItemPayload, S>

  type ReturnOutwardItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReturnOutwardItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReturnOutwardItemCountAggregateInputType | true
    }

  export interface ReturnOutwardItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReturnOutwardItem'], meta: { name: 'ReturnOutwardItem' } }
    /**
     * Find zero or one ReturnOutwardItem that matches the filter.
     * @param {ReturnOutwardItemFindUniqueArgs} args - Arguments to find a ReturnOutwardItem
     * @example
     * // Get one ReturnOutwardItem
     * const returnOutwardItem = await prisma.returnOutwardItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReturnOutwardItemFindUniqueArgs>(args: SelectSubset<T, ReturnOutwardItemFindUniqueArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReturnOutwardItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReturnOutwardItemFindUniqueOrThrowArgs} args - Arguments to find a ReturnOutwardItem
     * @example
     * // Get one ReturnOutwardItem
     * const returnOutwardItem = await prisma.returnOutwardItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReturnOutwardItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReturnOutwardItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReturnOutwardItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemFindFirstArgs} args - Arguments to find a ReturnOutwardItem
     * @example
     * // Get one ReturnOutwardItem
     * const returnOutwardItem = await prisma.returnOutwardItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReturnOutwardItemFindFirstArgs>(args?: SelectSubset<T, ReturnOutwardItemFindFirstArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReturnOutwardItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemFindFirstOrThrowArgs} args - Arguments to find a ReturnOutwardItem
     * @example
     * // Get one ReturnOutwardItem
     * const returnOutwardItem = await prisma.returnOutwardItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReturnOutwardItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReturnOutwardItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReturnOutwardItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReturnOutwardItems
     * const returnOutwardItems = await prisma.returnOutwardItem.findMany()
     * 
     * // Get first 10 ReturnOutwardItems
     * const returnOutwardItems = await prisma.returnOutwardItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const returnOutwardItemWithIdOnly = await prisma.returnOutwardItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReturnOutwardItemFindManyArgs>(args?: SelectSubset<T, ReturnOutwardItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReturnOutwardItem.
     * @param {ReturnOutwardItemCreateArgs} args - Arguments to create a ReturnOutwardItem.
     * @example
     * // Create one ReturnOutwardItem
     * const ReturnOutwardItem = await prisma.returnOutwardItem.create({
     *   data: {
     *     // ... data to create a ReturnOutwardItem
     *   }
     * })
     * 
     */
    create<T extends ReturnOutwardItemCreateArgs>(args: SelectSubset<T, ReturnOutwardItemCreateArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReturnOutwardItems.
     * @param {ReturnOutwardItemCreateManyArgs} args - Arguments to create many ReturnOutwardItems.
     * @example
     * // Create many ReturnOutwardItems
     * const returnOutwardItem = await prisma.returnOutwardItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReturnOutwardItemCreateManyArgs>(args?: SelectSubset<T, ReturnOutwardItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReturnOutwardItems and returns the data saved in the database.
     * @param {ReturnOutwardItemCreateManyAndReturnArgs} args - Arguments to create many ReturnOutwardItems.
     * @example
     * // Create many ReturnOutwardItems
     * const returnOutwardItem = await prisma.returnOutwardItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReturnOutwardItems and only return the `id`
     * const returnOutwardItemWithIdOnly = await prisma.returnOutwardItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReturnOutwardItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReturnOutwardItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReturnOutwardItem.
     * @param {ReturnOutwardItemDeleteArgs} args - Arguments to delete one ReturnOutwardItem.
     * @example
     * // Delete one ReturnOutwardItem
     * const ReturnOutwardItem = await prisma.returnOutwardItem.delete({
     *   where: {
     *     // ... filter to delete one ReturnOutwardItem
     *   }
     * })
     * 
     */
    delete<T extends ReturnOutwardItemDeleteArgs>(args: SelectSubset<T, ReturnOutwardItemDeleteArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReturnOutwardItem.
     * @param {ReturnOutwardItemUpdateArgs} args - Arguments to update one ReturnOutwardItem.
     * @example
     * // Update one ReturnOutwardItem
     * const returnOutwardItem = await prisma.returnOutwardItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReturnOutwardItemUpdateArgs>(args: SelectSubset<T, ReturnOutwardItemUpdateArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReturnOutwardItems.
     * @param {ReturnOutwardItemDeleteManyArgs} args - Arguments to filter ReturnOutwardItems to delete.
     * @example
     * // Delete a few ReturnOutwardItems
     * const { count } = await prisma.returnOutwardItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReturnOutwardItemDeleteManyArgs>(args?: SelectSubset<T, ReturnOutwardItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReturnOutwardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReturnOutwardItems
     * const returnOutwardItem = await prisma.returnOutwardItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReturnOutwardItemUpdateManyArgs>(args: SelectSubset<T, ReturnOutwardItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReturnOutwardItem.
     * @param {ReturnOutwardItemUpsertArgs} args - Arguments to update or create a ReturnOutwardItem.
     * @example
     * // Update or create a ReturnOutwardItem
     * const returnOutwardItem = await prisma.returnOutwardItem.upsert({
     *   create: {
     *     // ... data to create a ReturnOutwardItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReturnOutwardItem we want to update
     *   }
     * })
     */
    upsert<T extends ReturnOutwardItemUpsertArgs>(args: SelectSubset<T, ReturnOutwardItemUpsertArgs<ExtArgs>>): Prisma__ReturnOutwardItemClient<$Result.GetResult<Prisma.$ReturnOutwardItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReturnOutwardItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemCountArgs} args - Arguments to filter ReturnOutwardItems to count.
     * @example
     * // Count the number of ReturnOutwardItems
     * const count = await prisma.returnOutwardItem.count({
     *   where: {
     *     // ... the filter for the ReturnOutwardItems we want to count
     *   }
     * })
    **/
    count<T extends ReturnOutwardItemCountArgs>(
      args?: Subset<T, ReturnOutwardItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReturnOutwardItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReturnOutwardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReturnOutwardItemAggregateArgs>(args: Subset<T, ReturnOutwardItemAggregateArgs>): Prisma.PrismaPromise<GetReturnOutwardItemAggregateType<T>>

    /**
     * Group by ReturnOutwardItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReturnOutwardItemGroupByArgs} args - Group by arguments.
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
      T extends ReturnOutwardItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReturnOutwardItemGroupByArgs['orderBy'] }
        : { orderBy?: ReturnOutwardItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReturnOutwardItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReturnOutwardItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReturnOutwardItem model
   */
  readonly fields: ReturnOutwardItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReturnOutwardItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReturnOutwardItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    returnOutward<T extends ReturnOutwardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReturnOutwardDefaultArgs<ExtArgs>>): Prisma__ReturnOutwardClient<$Result.GetResult<Prisma.$ReturnOutwardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ReturnOutwardItem model
   */ 
  interface ReturnOutwardItemFieldRefs {
    readonly id: FieldRef<"ReturnOutwardItem", 'Int'>
    readonly quantity: FieldRef<"ReturnOutwardItem", 'Int'>
    readonly costPrice: FieldRef<"ReturnOutwardItem", 'Float'>
    readonly productId: FieldRef<"ReturnOutwardItem", 'Int'>
    readonly returnOutwardId: FieldRef<"ReturnOutwardItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReturnOutwardItem findUnique
   */
  export type ReturnOutwardItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutwardItem to fetch.
     */
    where: ReturnOutwardItemWhereUniqueInput
  }

  /**
   * ReturnOutwardItem findUniqueOrThrow
   */
  export type ReturnOutwardItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutwardItem to fetch.
     */
    where: ReturnOutwardItemWhereUniqueInput
  }

  /**
   * ReturnOutwardItem findFirst
   */
  export type ReturnOutwardItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutwardItem to fetch.
     */
    where?: ReturnOutwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwardItems to fetch.
     */
    orderBy?: ReturnOutwardItemOrderByWithRelationInput | ReturnOutwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnOutwardItems.
     */
    cursor?: ReturnOutwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnOutwardItems.
     */
    distinct?: ReturnOutwardItemScalarFieldEnum | ReturnOutwardItemScalarFieldEnum[]
  }

  /**
   * ReturnOutwardItem findFirstOrThrow
   */
  export type ReturnOutwardItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutwardItem to fetch.
     */
    where?: ReturnOutwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwardItems to fetch.
     */
    orderBy?: ReturnOutwardItemOrderByWithRelationInput | ReturnOutwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReturnOutwardItems.
     */
    cursor?: ReturnOutwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwardItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReturnOutwardItems.
     */
    distinct?: ReturnOutwardItemScalarFieldEnum | ReturnOutwardItemScalarFieldEnum[]
  }

  /**
   * ReturnOutwardItem findMany
   */
  export type ReturnOutwardItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * Filter, which ReturnOutwardItems to fetch.
     */
    where?: ReturnOutwardItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReturnOutwardItems to fetch.
     */
    orderBy?: ReturnOutwardItemOrderByWithRelationInput | ReturnOutwardItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReturnOutwardItems.
     */
    cursor?: ReturnOutwardItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReturnOutwardItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReturnOutwardItems.
     */
    skip?: number
    distinct?: ReturnOutwardItemScalarFieldEnum | ReturnOutwardItemScalarFieldEnum[]
  }

  /**
   * ReturnOutwardItem create
   */
  export type ReturnOutwardItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ReturnOutwardItem.
     */
    data: XOR<ReturnOutwardItemCreateInput, ReturnOutwardItemUncheckedCreateInput>
  }

  /**
   * ReturnOutwardItem createMany
   */
  export type ReturnOutwardItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReturnOutwardItems.
     */
    data: ReturnOutwardItemCreateManyInput | ReturnOutwardItemCreateManyInput[]
  }

  /**
   * ReturnOutwardItem createManyAndReturn
   */
  export type ReturnOutwardItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReturnOutwardItems.
     */
    data: ReturnOutwardItemCreateManyInput | ReturnOutwardItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReturnOutwardItem update
   */
  export type ReturnOutwardItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ReturnOutwardItem.
     */
    data: XOR<ReturnOutwardItemUpdateInput, ReturnOutwardItemUncheckedUpdateInput>
    /**
     * Choose, which ReturnOutwardItem to update.
     */
    where: ReturnOutwardItemWhereUniqueInput
  }

  /**
   * ReturnOutwardItem updateMany
   */
  export type ReturnOutwardItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReturnOutwardItems.
     */
    data: XOR<ReturnOutwardItemUpdateManyMutationInput, ReturnOutwardItemUncheckedUpdateManyInput>
    /**
     * Filter which ReturnOutwardItems to update
     */
    where?: ReturnOutwardItemWhereInput
  }

  /**
   * ReturnOutwardItem upsert
   */
  export type ReturnOutwardItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ReturnOutwardItem to update in case it exists.
     */
    where: ReturnOutwardItemWhereUniqueInput
    /**
     * In case the ReturnOutwardItem found by the `where` argument doesn't exist, create a new ReturnOutwardItem with this data.
     */
    create: XOR<ReturnOutwardItemCreateInput, ReturnOutwardItemUncheckedCreateInput>
    /**
     * In case the ReturnOutwardItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReturnOutwardItemUpdateInput, ReturnOutwardItemUncheckedUpdateInput>
  }

  /**
   * ReturnOutwardItem delete
   */
  export type ReturnOutwardItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
    /**
     * Filter which ReturnOutwardItem to delete.
     */
    where: ReturnOutwardItemWhereUniqueInput
  }

  /**
   * ReturnOutwardItem deleteMany
   */
  export type ReturnOutwardItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReturnOutwardItems to delete
     */
    where?: ReturnOutwardItemWhereInput
  }

  /**
   * ReturnOutwardItem without action
   */
  export type ReturnOutwardItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReturnOutwardItem
     */
    select?: ReturnOutwardItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReturnOutwardItemInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: number | null
    title: string | null
    amount: number | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: number | null
    title: string | null
    amount: number | null
    category: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    category: number
    description: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    category?: true
    description?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    category?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: number
    title: string
    amount: number
    category: string
    description: string | null
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
  }


  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      amount: number
      category: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Expense model
   */ 
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'Int'>
    readonly title: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
  }


  /**
   * Model StockAdjustment
   */

  export type AggregateStockAdjustment = {
    _count: StockAdjustmentCountAggregateOutputType | null
    _avg: StockAdjustmentAvgAggregateOutputType | null
    _sum: StockAdjustmentSumAggregateOutputType | null
    _min: StockAdjustmentMinAggregateOutputType | null
    _max: StockAdjustmentMaxAggregateOutputType | null
  }

  export type StockAdjustmentAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    change: number | null
  }

  export type StockAdjustmentSumAggregateOutputType = {
    id: number | null
    productId: number | null
    change: number | null
  }

  export type StockAdjustmentMinAggregateOutputType = {
    id: number | null
    productId: number | null
    change: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type StockAdjustmentMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    change: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type StockAdjustmentCountAggregateOutputType = {
    id: number
    productId: number
    change: number
    reason: number
    createdAt: number
    _all: number
  }


  export type StockAdjustmentAvgAggregateInputType = {
    id?: true
    productId?: true
    change?: true
  }

  export type StockAdjustmentSumAggregateInputType = {
    id?: true
    productId?: true
    change?: true
  }

  export type StockAdjustmentMinAggregateInputType = {
    id?: true
    productId?: true
    change?: true
    reason?: true
    createdAt?: true
  }

  export type StockAdjustmentMaxAggregateInputType = {
    id?: true
    productId?: true
    change?: true
    reason?: true
    createdAt?: true
  }

  export type StockAdjustmentCountAggregateInputType = {
    id?: true
    productId?: true
    change?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type StockAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockAdjustment to aggregate.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockAdjustments
    **/
    _count?: true | StockAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockAdjustmentMaxAggregateInputType
  }

  export type GetStockAdjustmentAggregateType<T extends StockAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateStockAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockAdjustment[P]>
      : GetScalarType<T[P], AggregateStockAdjustment[P]>
  }




  export type StockAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockAdjustmentWhereInput
    orderBy?: StockAdjustmentOrderByWithAggregationInput | StockAdjustmentOrderByWithAggregationInput[]
    by: StockAdjustmentScalarFieldEnum[] | StockAdjustmentScalarFieldEnum
    having?: StockAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockAdjustmentCountAggregateInputType | true
    _avg?: StockAdjustmentAvgAggregateInputType
    _sum?: StockAdjustmentSumAggregateInputType
    _min?: StockAdjustmentMinAggregateInputType
    _max?: StockAdjustmentMaxAggregateInputType
  }

  export type StockAdjustmentGroupByOutputType = {
    id: number
    productId: number
    change: number
    reason: string
    createdAt: Date
    _count: StockAdjustmentCountAggregateOutputType | null
    _avg: StockAdjustmentAvgAggregateOutputType | null
    _sum: StockAdjustmentSumAggregateOutputType | null
    _min: StockAdjustmentMinAggregateOutputType | null
    _max: StockAdjustmentMaxAggregateOutputType | null
  }

  type GetStockAdjustmentGroupByPayload<T extends StockAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], StockAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type StockAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    change?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockAdjustment"]>

  export type StockAdjustmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    change?: boolean
    reason?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockAdjustment"]>

  export type StockAdjustmentSelectScalar = {
    id?: boolean
    productId?: boolean
    change?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type StockAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockAdjustmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockAdjustment"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      change: number
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["stockAdjustment"]>
    composites: {}
  }

  type StockAdjustmentGetPayload<S extends boolean | null | undefined | StockAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$StockAdjustmentPayload, S>

  type StockAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockAdjustmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockAdjustmentCountAggregateInputType | true
    }

  export interface StockAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockAdjustment'], meta: { name: 'StockAdjustment' } }
    /**
     * Find zero or one StockAdjustment that matches the filter.
     * @param {StockAdjustmentFindUniqueArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockAdjustmentFindUniqueArgs>(args: SelectSubset<T, StockAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockAdjustment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, StockAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentFindFirstArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockAdjustmentFindFirstArgs>(args?: SelectSubset<T, StockAdjustmentFindFirstArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentFindFirstOrThrowArgs} args - Arguments to find a StockAdjustment
     * @example
     * // Get one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, StockAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockAdjustments
     * const stockAdjustments = await prisma.stockAdjustment.findMany()
     * 
     * // Get first 10 StockAdjustments
     * const stockAdjustments = await prisma.stockAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockAdjustmentWithIdOnly = await prisma.stockAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockAdjustmentFindManyArgs>(args?: SelectSubset<T, StockAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockAdjustment.
     * @param {StockAdjustmentCreateArgs} args - Arguments to create a StockAdjustment.
     * @example
     * // Create one StockAdjustment
     * const StockAdjustment = await prisma.stockAdjustment.create({
     *   data: {
     *     // ... data to create a StockAdjustment
     *   }
     * })
     * 
     */
    create<T extends StockAdjustmentCreateArgs>(args: SelectSubset<T, StockAdjustmentCreateArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockAdjustments.
     * @param {StockAdjustmentCreateManyArgs} args - Arguments to create many StockAdjustments.
     * @example
     * // Create many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockAdjustmentCreateManyArgs>(args?: SelectSubset<T, StockAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockAdjustments and returns the data saved in the database.
     * @param {StockAdjustmentCreateManyAndReturnArgs} args - Arguments to create many StockAdjustments.
     * @example
     * // Create many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockAdjustments and only return the `id`
     * const stockAdjustmentWithIdOnly = await prisma.stockAdjustment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockAdjustmentCreateManyAndReturnArgs>(args?: SelectSubset<T, StockAdjustmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockAdjustment.
     * @param {StockAdjustmentDeleteArgs} args - Arguments to delete one StockAdjustment.
     * @example
     * // Delete one StockAdjustment
     * const StockAdjustment = await prisma.stockAdjustment.delete({
     *   where: {
     *     // ... filter to delete one StockAdjustment
     *   }
     * })
     * 
     */
    delete<T extends StockAdjustmentDeleteArgs>(args: SelectSubset<T, StockAdjustmentDeleteArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockAdjustment.
     * @param {StockAdjustmentUpdateArgs} args - Arguments to update one StockAdjustment.
     * @example
     * // Update one StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockAdjustmentUpdateArgs>(args: SelectSubset<T, StockAdjustmentUpdateArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockAdjustments.
     * @param {StockAdjustmentDeleteManyArgs} args - Arguments to filter StockAdjustments to delete.
     * @example
     * // Delete a few StockAdjustments
     * const { count } = await prisma.stockAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockAdjustmentDeleteManyArgs>(args?: SelectSubset<T, StockAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockAdjustments
     * const stockAdjustment = await prisma.stockAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockAdjustmentUpdateManyArgs>(args: SelectSubset<T, StockAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockAdjustment.
     * @param {StockAdjustmentUpsertArgs} args - Arguments to update or create a StockAdjustment.
     * @example
     * // Update or create a StockAdjustment
     * const stockAdjustment = await prisma.stockAdjustment.upsert({
     *   create: {
     *     // ... data to create a StockAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends StockAdjustmentUpsertArgs>(args: SelectSubset<T, StockAdjustmentUpsertArgs<ExtArgs>>): Prisma__StockAdjustmentClient<$Result.GetResult<Prisma.$StockAdjustmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentCountArgs} args - Arguments to filter StockAdjustments to count.
     * @example
     * // Count the number of StockAdjustments
     * const count = await prisma.stockAdjustment.count({
     *   where: {
     *     // ... the filter for the StockAdjustments we want to count
     *   }
     * })
    **/
    count<T extends StockAdjustmentCountArgs>(
      args?: Subset<T, StockAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAdjustmentAggregateArgs>(args: Subset<T, StockAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetStockAdjustmentAggregateType<T>>

    /**
     * Group by StockAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAdjustmentGroupByArgs} args - Group by arguments.
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
      T extends StockAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: StockAdjustmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockAdjustment model
   */
  readonly fields: StockAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockAdjustment model
   */ 
  interface StockAdjustmentFieldRefs {
    readonly id: FieldRef<"StockAdjustment", 'Int'>
    readonly productId: FieldRef<"StockAdjustment", 'Int'>
    readonly change: FieldRef<"StockAdjustment", 'Int'>
    readonly reason: FieldRef<"StockAdjustment", 'String'>
    readonly createdAt: FieldRef<"StockAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockAdjustment findUnique
   */
  export type StockAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment findUniqueOrThrow
   */
  export type StockAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment findFirst
   */
  export type StockAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockAdjustments.
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockAdjustments.
     */
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * StockAdjustment findFirstOrThrow
   */
  export type StockAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustment to fetch.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockAdjustments.
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockAdjustments.
     */
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * StockAdjustment findMany
   */
  export type StockAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which StockAdjustments to fetch.
     */
    where?: StockAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockAdjustments to fetch.
     */
    orderBy?: StockAdjustmentOrderByWithRelationInput | StockAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockAdjustments.
     */
    cursor?: StockAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockAdjustments.
     */
    skip?: number
    distinct?: StockAdjustmentScalarFieldEnum | StockAdjustmentScalarFieldEnum[]
  }

  /**
   * StockAdjustment create
   */
  export type StockAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a StockAdjustment.
     */
    data: XOR<StockAdjustmentCreateInput, StockAdjustmentUncheckedCreateInput>
  }

  /**
   * StockAdjustment createMany
   */
  export type StockAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockAdjustments.
     */
    data: StockAdjustmentCreateManyInput | StockAdjustmentCreateManyInput[]
  }

  /**
   * StockAdjustment createManyAndReturn
   */
  export type StockAdjustmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockAdjustments.
     */
    data: StockAdjustmentCreateManyInput | StockAdjustmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockAdjustment update
   */
  export type StockAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a StockAdjustment.
     */
    data: XOR<StockAdjustmentUpdateInput, StockAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which StockAdjustment to update.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment updateMany
   */
  export type StockAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockAdjustments.
     */
    data: XOR<StockAdjustmentUpdateManyMutationInput, StockAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which StockAdjustments to update
     */
    where?: StockAdjustmentWhereInput
  }

  /**
   * StockAdjustment upsert
   */
  export type StockAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the StockAdjustment to update in case it exists.
     */
    where: StockAdjustmentWhereUniqueInput
    /**
     * In case the StockAdjustment found by the `where` argument doesn't exist, create a new StockAdjustment with this data.
     */
    create: XOR<StockAdjustmentCreateInput, StockAdjustmentUncheckedCreateInput>
    /**
     * In case the StockAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockAdjustmentUpdateInput, StockAdjustmentUncheckedUpdateInput>
  }

  /**
   * StockAdjustment delete
   */
  export type StockAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which StockAdjustment to delete.
     */
    where: StockAdjustmentWhereUniqueInput
  }

  /**
   * StockAdjustment deleteMany
   */
  export type StockAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockAdjustments to delete
     */
    where?: StockAdjustmentWhereInput
  }

  /**
   * StockAdjustment without action
   */
  export type StockAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockAdjustment
     */
    select?: StockAdjustmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    barcode: 'barcode',
    price: 'price',
    costPrice: 'costPrice',
    stock: 'stock',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    total: 'total',
    paymentMethod: 'paymentMethod',
    cashAmount: 'cashAmount',
    mpesaAmount: 'mpesaAmount',
    status: 'status',
    voidReason: 'voidReason',
    voidedAt: 'voidedAt',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    originalPrice: 'originalPrice',
    costPrice: 'costPrice',
    productId: 'productId',
    saleId: 'saleId'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    referenceNo: 'referenceNo',
    totalAmount: 'totalAmount',
    carriageInwards: 'carriageInwards',
    amountPaid: 'amountPaid',
    paymentStatus: 'paymentStatus',
    notes: 'notes',
    createdAt: 'createdAt',
    supplierId: 'supplierId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SupplierPaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    method: 'method',
    notes: 'notes',
    createdAt: 'createdAt',
    purchaseId: 'purchaseId'
  };

  export type SupplierPaymentScalarFieldEnum = (typeof SupplierPaymentScalarFieldEnum)[keyof typeof SupplierPaymentScalarFieldEnum]


  export const PurchaseItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    costPrice: 'costPrice',
    productId: 'productId',
    purchaseId: 'purchaseId'
  };

  export type PurchaseItemScalarFieldEnum = (typeof PurchaseItemScalarFieldEnum)[keyof typeof PurchaseItemScalarFieldEnum]


  export const ReturnInwardScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    saleId: 'saleId'
  };

  export type ReturnInwardScalarFieldEnum = (typeof ReturnInwardScalarFieldEnum)[keyof typeof ReturnInwardScalarFieldEnum]


  export const ReturnInwardItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    productId: 'productId',
    returnInwardId: 'returnInwardId'
  };

  export type ReturnInwardItemScalarFieldEnum = (typeof ReturnInwardItemScalarFieldEnum)[keyof typeof ReturnInwardItemScalarFieldEnum]


  export const ReturnOutwardScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    supplierId: 'supplierId',
    purchaseId: 'purchaseId'
  };

  export type ReturnOutwardScalarFieldEnum = (typeof ReturnOutwardScalarFieldEnum)[keyof typeof ReturnOutwardScalarFieldEnum]


  export const ReturnOutwardItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    costPrice: 'costPrice',
    productId: 'productId',
    returnOutwardId: 'returnOutwardId'
  };

  export type ReturnOutwardItemScalarFieldEnum = (typeof ReturnOutwardItemScalarFieldEnum)[keyof typeof ReturnOutwardItemScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const StockAdjustmentScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    change: 'change',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type StockAdjustmentScalarFieldEnum = (typeof StockAdjustmentScalarFieldEnum)[keyof typeof StockAdjustmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sales?: SaleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sales?: SaleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    purchases?: PurchaseListRelationFilter
    returnOutwards?: ReturnOutwardListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    returnOutwards?: ReturnOutwardOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    phone?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    purchases?: PurchaseListRelationFilter
    returnOutwards?: ReturnOutwardListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    saleItems?: SaleItemListRelationFilter
    purchaseItems?: PurchaseItemListRelationFilter
    returnInItems?: ReturnInwardItemListRelationFilter
    returnOutItems?: ReturnOutwardItemListRelationFilter
    stockAdjustments?: StockAdjustmentListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saleItems?: SaleItemOrderByRelationAggregateInput
    purchaseItems?: PurchaseItemOrderByRelationAggregateInput
    returnInItems?: ReturnInwardItemOrderByRelationAggregateInput
    returnOutItems?: ReturnOutwardItemOrderByRelationAggregateInput
    stockAdjustments?: StockAdjustmentOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    barcode?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    costPrice?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    category?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    saleItems?: SaleItemListRelationFilter
    purchaseItems?: PurchaseItemListRelationFilter
    returnInItems?: ReturnInwardItemListRelationFilter
    returnOutItems?: ReturnOutwardItemListRelationFilter
    stockAdjustments?: StockAdjustmentListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    barcode?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    costPrice?: FloatWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    category?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: IntFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    cashAmount?: FloatFilter<"Sale"> | number
    mpesaAmount?: FloatFilter<"Sale"> | number
    status?: StringFilter<"Sale"> | string
    voidReason?: StringNullableFilter<"Sale"> | string | null
    voidedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    userId?: IntFilter<"Sale"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: SaleItemListRelationFilter
    returnInwards?: ReturnInwardListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    status?: SortOrder
    voidReason?: SortOrderInput | SortOrder
    voidedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: SaleItemOrderByRelationAggregateInput
    returnInwards?: ReturnInwardOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    total?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    cashAmount?: FloatFilter<"Sale"> | number
    mpesaAmount?: FloatFilter<"Sale"> | number
    status?: StringFilter<"Sale"> | string
    voidReason?: StringNullableFilter<"Sale"> | string | null
    voidedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    userId?: IntFilter<"Sale"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: SaleItemListRelationFilter
    returnInwards?: ReturnInwardListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    status?: SortOrder
    voidReason?: SortOrderInput | SortOrder
    voidedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sale"> | number
    total?: FloatWithAggregatesFilter<"Sale"> | number
    paymentMethod?: StringWithAggregatesFilter<"Sale"> | string
    cashAmount?: FloatWithAggregatesFilter<"Sale"> | number
    mpesaAmount?: FloatWithAggregatesFilter<"Sale"> | number
    status?: StringWithAggregatesFilter<"Sale"> | string
    voidReason?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    voidedAt?: DateTimeNullableWithAggregatesFilter<"Sale"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    userId?: IntWithAggregatesFilter<"Sale"> | number
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: IntFilter<"SaleItem"> | number
    quantity?: IntFilter<"SaleItem"> | number
    price?: FloatFilter<"SaleItem"> | number
    originalPrice?: FloatFilter<"SaleItem"> | number
    costPrice?: FloatFilter<"SaleItem"> | number
    productId?: IntFilter<"SaleItem"> | number
    saleId?: IntFilter<"SaleItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
    product?: ProductOrderByWithRelationInput
    sale?: SaleOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    quantity?: IntFilter<"SaleItem"> | number
    price?: FloatFilter<"SaleItem"> | number
    originalPrice?: FloatFilter<"SaleItem"> | number
    costPrice?: FloatFilter<"SaleItem"> | number
    productId?: IntFilter<"SaleItem"> | number
    saleId?: IntFilter<"SaleItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    sale?: XOR<SaleRelationFilter, SaleWhereInput>
  }, "id">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SaleItem"> | number
    quantity?: IntWithAggregatesFilter<"SaleItem"> | number
    price?: FloatWithAggregatesFilter<"SaleItem"> | number
    originalPrice?: FloatWithAggregatesFilter<"SaleItem"> | number
    costPrice?: FloatWithAggregatesFilter<"SaleItem"> | number
    productId?: IntWithAggregatesFilter<"SaleItem"> | number
    saleId?: IntWithAggregatesFilter<"SaleItem"> | number
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    referenceNo?: StringNullableFilter<"Purchase"> | string | null
    totalAmount?: FloatFilter<"Purchase"> | number
    carriageInwards?: FloatFilter<"Purchase"> | number
    amountPaid?: FloatFilter<"Purchase"> | number
    paymentStatus?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    supplierId?: IntFilter<"Purchase"> | number
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    items?: PurchaseItemListRelationFilter
    returnOutwards?: ReturnOutwardListRelationFilter
    payments?: SupplierPaymentListRelationFilter
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    items?: PurchaseItemOrderByRelationAggregateInput
    returnOutwards?: ReturnOutwardOrderByRelationAggregateInput
    payments?: SupplierPaymentOrderByRelationAggregateInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    referenceNo?: StringNullableFilter<"Purchase"> | string | null
    totalAmount?: FloatFilter<"Purchase"> | number
    carriageInwards?: FloatFilter<"Purchase"> | number
    amountPaid?: FloatFilter<"Purchase"> | number
    paymentStatus?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    supplierId?: IntFilter<"Purchase"> | number
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    items?: PurchaseItemListRelationFilter
    returnOutwards?: ReturnOutwardListRelationFilter
    payments?: SupplierPaymentListRelationFilter
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    referenceNo?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    totalAmount?: FloatWithAggregatesFilter<"Purchase"> | number
    carriageInwards?: FloatWithAggregatesFilter<"Purchase"> | number
    amountPaid?: FloatWithAggregatesFilter<"Purchase"> | number
    paymentStatus?: StringWithAggregatesFilter<"Purchase"> | string
    notes?: StringNullableWithAggregatesFilter<"Purchase"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    supplierId?: IntWithAggregatesFilter<"Purchase"> | number
  }

  export type SupplierPaymentWhereInput = {
    AND?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    OR?: SupplierPaymentWhereInput[]
    NOT?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    id?: IntFilter<"SupplierPayment"> | number
    amount?: FloatFilter<"SupplierPayment"> | number
    method?: StringFilter<"SupplierPayment"> | string
    notes?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    purchaseId?: IntFilter<"SupplierPayment"> | number
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type SupplierPaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchaseId?: SortOrder
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type SupplierPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    OR?: SupplierPaymentWhereInput[]
    NOT?: SupplierPaymentWhereInput | SupplierPaymentWhereInput[]
    amount?: FloatFilter<"SupplierPayment"> | number
    method?: StringFilter<"SupplierPayment"> | string
    notes?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    purchaseId?: IntFilter<"SupplierPayment"> | number
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id">

  export type SupplierPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    purchaseId?: SortOrder
    _count?: SupplierPaymentCountOrderByAggregateInput
    _avg?: SupplierPaymentAvgOrderByAggregateInput
    _max?: SupplierPaymentMaxOrderByAggregateInput
    _min?: SupplierPaymentMinOrderByAggregateInput
    _sum?: SupplierPaymentSumOrderByAggregateInput
  }

  export type SupplierPaymentScalarWhereWithAggregatesInput = {
    AND?: SupplierPaymentScalarWhereWithAggregatesInput | SupplierPaymentScalarWhereWithAggregatesInput[]
    OR?: SupplierPaymentScalarWhereWithAggregatesInput[]
    NOT?: SupplierPaymentScalarWhereWithAggregatesInput | SupplierPaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SupplierPayment"> | number
    amount?: FloatWithAggregatesFilter<"SupplierPayment"> | number
    method?: StringWithAggregatesFilter<"SupplierPayment"> | string
    notes?: StringNullableWithAggregatesFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierPayment"> | Date | string
    purchaseId?: IntWithAggregatesFilter<"SupplierPayment"> | number
  }

  export type PurchaseItemWhereInput = {
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    id?: IntFilter<"PurchaseItem"> | number
    quantity?: IntFilter<"PurchaseItem"> | number
    costPrice?: FloatFilter<"PurchaseItem"> | number
    productId?: IntFilter<"PurchaseItem"> | number
    purchaseId?: IntFilter<"PurchaseItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }

  export type PurchaseItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
    product?: ProductOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
  }

  export type PurchaseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    OR?: PurchaseItemWhereInput[]
    NOT?: PurchaseItemWhereInput | PurchaseItemWhereInput[]
    quantity?: IntFilter<"PurchaseItem"> | number
    costPrice?: FloatFilter<"PurchaseItem"> | number
    productId?: IntFilter<"PurchaseItem"> | number
    purchaseId?: IntFilter<"PurchaseItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    purchase?: XOR<PurchaseRelationFilter, PurchaseWhereInput>
  }, "id">

  export type PurchaseItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
    _count?: PurchaseItemCountOrderByAggregateInput
    _avg?: PurchaseItemAvgOrderByAggregateInput
    _max?: PurchaseItemMaxOrderByAggregateInput
    _min?: PurchaseItemMinOrderByAggregateInput
    _sum?: PurchaseItemSumOrderByAggregateInput
  }

  export type PurchaseItemScalarWhereWithAggregatesInput = {
    AND?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    OR?: PurchaseItemScalarWhereWithAggregatesInput[]
    NOT?: PurchaseItemScalarWhereWithAggregatesInput | PurchaseItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseItem"> | number
    quantity?: IntWithAggregatesFilter<"PurchaseItem"> | number
    costPrice?: FloatWithAggregatesFilter<"PurchaseItem"> | number
    productId?: IntWithAggregatesFilter<"PurchaseItem"> | number
    purchaseId?: IntWithAggregatesFilter<"PurchaseItem"> | number
  }

  export type ReturnInwardWhereInput = {
    AND?: ReturnInwardWhereInput | ReturnInwardWhereInput[]
    OR?: ReturnInwardWhereInput[]
    NOT?: ReturnInwardWhereInput | ReturnInwardWhereInput[]
    id?: IntFilter<"ReturnInward"> | number
    reason?: StringFilter<"ReturnInward"> | string
    totalAmount?: FloatFilter<"ReturnInward"> | number
    createdAt?: DateTimeFilter<"ReturnInward"> | Date | string
    saleId?: IntNullableFilter<"ReturnInward"> | number | null
    sale?: XOR<SaleNullableRelationFilter, SaleWhereInput> | null
    items?: ReturnInwardItemListRelationFilter
  }

  export type ReturnInwardOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    saleId?: SortOrderInput | SortOrder
    sale?: SaleOrderByWithRelationInput
    items?: ReturnInwardItemOrderByRelationAggregateInput
  }

  export type ReturnInwardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReturnInwardWhereInput | ReturnInwardWhereInput[]
    OR?: ReturnInwardWhereInput[]
    NOT?: ReturnInwardWhereInput | ReturnInwardWhereInput[]
    reason?: StringFilter<"ReturnInward"> | string
    totalAmount?: FloatFilter<"ReturnInward"> | number
    createdAt?: DateTimeFilter<"ReturnInward"> | Date | string
    saleId?: IntNullableFilter<"ReturnInward"> | number | null
    sale?: XOR<SaleNullableRelationFilter, SaleWhereInput> | null
    items?: ReturnInwardItemListRelationFilter
  }, "id">

  export type ReturnInwardOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    saleId?: SortOrderInput | SortOrder
    _count?: ReturnInwardCountOrderByAggregateInput
    _avg?: ReturnInwardAvgOrderByAggregateInput
    _max?: ReturnInwardMaxOrderByAggregateInput
    _min?: ReturnInwardMinOrderByAggregateInput
    _sum?: ReturnInwardSumOrderByAggregateInput
  }

  export type ReturnInwardScalarWhereWithAggregatesInput = {
    AND?: ReturnInwardScalarWhereWithAggregatesInput | ReturnInwardScalarWhereWithAggregatesInput[]
    OR?: ReturnInwardScalarWhereWithAggregatesInput[]
    NOT?: ReturnInwardScalarWhereWithAggregatesInput | ReturnInwardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReturnInward"> | number
    reason?: StringWithAggregatesFilter<"ReturnInward"> | string
    totalAmount?: FloatWithAggregatesFilter<"ReturnInward"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ReturnInward"> | Date | string
    saleId?: IntNullableWithAggregatesFilter<"ReturnInward"> | number | null
  }

  export type ReturnInwardItemWhereInput = {
    AND?: ReturnInwardItemWhereInput | ReturnInwardItemWhereInput[]
    OR?: ReturnInwardItemWhereInput[]
    NOT?: ReturnInwardItemWhereInput | ReturnInwardItemWhereInput[]
    id?: IntFilter<"ReturnInwardItem"> | number
    quantity?: IntFilter<"ReturnInwardItem"> | number
    price?: FloatFilter<"ReturnInwardItem"> | number
    productId?: IntFilter<"ReturnInwardItem"> | number
    returnInwardId?: IntFilter<"ReturnInwardItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    returnInward?: XOR<ReturnInwardRelationFilter, ReturnInwardWhereInput>
  }

  export type ReturnInwardItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
    product?: ProductOrderByWithRelationInput
    returnInward?: ReturnInwardOrderByWithRelationInput
  }

  export type ReturnInwardItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReturnInwardItemWhereInput | ReturnInwardItemWhereInput[]
    OR?: ReturnInwardItemWhereInput[]
    NOT?: ReturnInwardItemWhereInput | ReturnInwardItemWhereInput[]
    quantity?: IntFilter<"ReturnInwardItem"> | number
    price?: FloatFilter<"ReturnInwardItem"> | number
    productId?: IntFilter<"ReturnInwardItem"> | number
    returnInwardId?: IntFilter<"ReturnInwardItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    returnInward?: XOR<ReturnInwardRelationFilter, ReturnInwardWhereInput>
  }, "id">

  export type ReturnInwardItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
    _count?: ReturnInwardItemCountOrderByAggregateInput
    _avg?: ReturnInwardItemAvgOrderByAggregateInput
    _max?: ReturnInwardItemMaxOrderByAggregateInput
    _min?: ReturnInwardItemMinOrderByAggregateInput
    _sum?: ReturnInwardItemSumOrderByAggregateInput
  }

  export type ReturnInwardItemScalarWhereWithAggregatesInput = {
    AND?: ReturnInwardItemScalarWhereWithAggregatesInput | ReturnInwardItemScalarWhereWithAggregatesInput[]
    OR?: ReturnInwardItemScalarWhereWithAggregatesInput[]
    NOT?: ReturnInwardItemScalarWhereWithAggregatesInput | ReturnInwardItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReturnInwardItem"> | number
    quantity?: IntWithAggregatesFilter<"ReturnInwardItem"> | number
    price?: FloatWithAggregatesFilter<"ReturnInwardItem"> | number
    productId?: IntWithAggregatesFilter<"ReturnInwardItem"> | number
    returnInwardId?: IntWithAggregatesFilter<"ReturnInwardItem"> | number
  }

  export type ReturnOutwardWhereInput = {
    AND?: ReturnOutwardWhereInput | ReturnOutwardWhereInput[]
    OR?: ReturnOutwardWhereInput[]
    NOT?: ReturnOutwardWhereInput | ReturnOutwardWhereInput[]
    id?: IntFilter<"ReturnOutward"> | number
    reason?: StringFilter<"ReturnOutward"> | string
    totalAmount?: FloatFilter<"ReturnOutward"> | number
    createdAt?: DateTimeFilter<"ReturnOutward"> | Date | string
    supplierId?: IntFilter<"ReturnOutward"> | number
    purchaseId?: IntNullableFilter<"ReturnOutward"> | number | null
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    purchase?: XOR<PurchaseNullableRelationFilter, PurchaseWhereInput> | null
    items?: ReturnOutwardItemListRelationFilter
  }

  export type ReturnOutwardOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    supplier?: SupplierOrderByWithRelationInput
    purchase?: PurchaseOrderByWithRelationInput
    items?: ReturnOutwardItemOrderByRelationAggregateInput
  }

  export type ReturnOutwardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReturnOutwardWhereInput | ReturnOutwardWhereInput[]
    OR?: ReturnOutwardWhereInput[]
    NOT?: ReturnOutwardWhereInput | ReturnOutwardWhereInput[]
    reason?: StringFilter<"ReturnOutward"> | string
    totalAmount?: FloatFilter<"ReturnOutward"> | number
    createdAt?: DateTimeFilter<"ReturnOutward"> | Date | string
    supplierId?: IntFilter<"ReturnOutward"> | number
    purchaseId?: IntNullableFilter<"ReturnOutward"> | number | null
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    purchase?: XOR<PurchaseNullableRelationFilter, PurchaseWhereInput> | null
    items?: ReturnOutwardItemListRelationFilter
  }, "id">

  export type ReturnOutwardOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrderInput | SortOrder
    _count?: ReturnOutwardCountOrderByAggregateInput
    _avg?: ReturnOutwardAvgOrderByAggregateInput
    _max?: ReturnOutwardMaxOrderByAggregateInput
    _min?: ReturnOutwardMinOrderByAggregateInput
    _sum?: ReturnOutwardSumOrderByAggregateInput
  }

  export type ReturnOutwardScalarWhereWithAggregatesInput = {
    AND?: ReturnOutwardScalarWhereWithAggregatesInput | ReturnOutwardScalarWhereWithAggregatesInput[]
    OR?: ReturnOutwardScalarWhereWithAggregatesInput[]
    NOT?: ReturnOutwardScalarWhereWithAggregatesInput | ReturnOutwardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReturnOutward"> | number
    reason?: StringWithAggregatesFilter<"ReturnOutward"> | string
    totalAmount?: FloatWithAggregatesFilter<"ReturnOutward"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ReturnOutward"> | Date | string
    supplierId?: IntWithAggregatesFilter<"ReturnOutward"> | number
    purchaseId?: IntNullableWithAggregatesFilter<"ReturnOutward"> | number | null
  }

  export type ReturnOutwardItemWhereInput = {
    AND?: ReturnOutwardItemWhereInput | ReturnOutwardItemWhereInput[]
    OR?: ReturnOutwardItemWhereInput[]
    NOT?: ReturnOutwardItemWhereInput | ReturnOutwardItemWhereInput[]
    id?: IntFilter<"ReturnOutwardItem"> | number
    quantity?: IntFilter<"ReturnOutwardItem"> | number
    costPrice?: FloatFilter<"ReturnOutwardItem"> | number
    productId?: IntFilter<"ReturnOutwardItem"> | number
    returnOutwardId?: IntFilter<"ReturnOutwardItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    returnOutward?: XOR<ReturnOutwardRelationFilter, ReturnOutwardWhereInput>
  }

  export type ReturnOutwardItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
    product?: ProductOrderByWithRelationInput
    returnOutward?: ReturnOutwardOrderByWithRelationInput
  }

  export type ReturnOutwardItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReturnOutwardItemWhereInput | ReturnOutwardItemWhereInput[]
    OR?: ReturnOutwardItemWhereInput[]
    NOT?: ReturnOutwardItemWhereInput | ReturnOutwardItemWhereInput[]
    quantity?: IntFilter<"ReturnOutwardItem"> | number
    costPrice?: FloatFilter<"ReturnOutwardItem"> | number
    productId?: IntFilter<"ReturnOutwardItem"> | number
    returnOutwardId?: IntFilter<"ReturnOutwardItem"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    returnOutward?: XOR<ReturnOutwardRelationFilter, ReturnOutwardWhereInput>
  }, "id">

  export type ReturnOutwardItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
    _count?: ReturnOutwardItemCountOrderByAggregateInput
    _avg?: ReturnOutwardItemAvgOrderByAggregateInput
    _max?: ReturnOutwardItemMaxOrderByAggregateInput
    _min?: ReturnOutwardItemMinOrderByAggregateInput
    _sum?: ReturnOutwardItemSumOrderByAggregateInput
  }

  export type ReturnOutwardItemScalarWhereWithAggregatesInput = {
    AND?: ReturnOutwardItemScalarWhereWithAggregatesInput | ReturnOutwardItemScalarWhereWithAggregatesInput[]
    OR?: ReturnOutwardItemScalarWhereWithAggregatesInput[]
    NOT?: ReturnOutwardItemScalarWhereWithAggregatesInput | ReturnOutwardItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReturnOutwardItem"> | number
    quantity?: IntWithAggregatesFilter<"ReturnOutwardItem"> | number
    costPrice?: FloatWithAggregatesFilter<"ReturnOutwardItem"> | number
    productId?: IntWithAggregatesFilter<"ReturnOutwardItem"> | number
    returnOutwardId?: IntWithAggregatesFilter<"ReturnOutwardItem"> | number
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: IntFilter<"Expense"> | number
    title?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    title?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    category?: StringFilter<"Expense"> | string
    description?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expense"> | number
    title?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    category?: StringWithAggregatesFilter<"Expense"> | string
    description?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type StockAdjustmentWhereInput = {
    AND?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    OR?: StockAdjustmentWhereInput[]
    NOT?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    id?: IntFilter<"StockAdjustment"> | number
    productId?: IntFilter<"StockAdjustment"> | number
    change?: IntFilter<"StockAdjustment"> | number
    reason?: StringFilter<"StockAdjustment"> | string
    createdAt?: DateTimeFilter<"StockAdjustment"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type StockAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type StockAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    OR?: StockAdjustmentWhereInput[]
    NOT?: StockAdjustmentWhereInput | StockAdjustmentWhereInput[]
    productId?: IntFilter<"StockAdjustment"> | number
    change?: IntFilter<"StockAdjustment"> | number
    reason?: StringFilter<"StockAdjustment"> | string
    createdAt?: DateTimeFilter<"StockAdjustment"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type StockAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: StockAdjustmentCountOrderByAggregateInput
    _avg?: StockAdjustmentAvgOrderByAggregateInput
    _max?: StockAdjustmentMaxOrderByAggregateInput
    _min?: StockAdjustmentMinOrderByAggregateInput
    _sum?: StockAdjustmentSumOrderByAggregateInput
  }

  export type StockAdjustmentScalarWhereWithAggregatesInput = {
    AND?: StockAdjustmentScalarWhereWithAggregatesInput | StockAdjustmentScalarWhereWithAggregatesInput[]
    OR?: StockAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: StockAdjustmentScalarWhereWithAggregatesInput | StockAdjustmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockAdjustment"> | number
    productId?: IntWithAggregatesFilter<"StockAdjustment"> | number
    change?: IntWithAggregatesFilter<"StockAdjustment"> | number
    reason?: StringWithAggregatesFilter<"StockAdjustment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockAdjustment"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutSupplierInput
    returnOutwards?: ReturnOutwardCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutSupplierInput
    returnOutwards?: ReturnOutwardUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutSupplierNestedInput
    returnOutwards?: ReturnOutwardUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutSupplierNestedInput
    returnOutwards?: ReturnOutwardUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemUncheckedCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemUncheckedCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUncheckedUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUncheckedUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    returnInwards?: ReturnInwardCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: number
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    userId: number
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    returnInwards?: ReturnInwardUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    returnInwards?: ReturnInwardUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    returnInwards?: ReturnInwardUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: number
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    userId: number
  }

  export type SaleUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemCreateInput = {
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    product: ProductCreateNestedOneWithoutSaleItemsInput
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: number
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    productId: number
    saleId: number
  }

  export type SaleItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemCreateManyInput = {
    id?: number
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    productId: number
    saleId: number
  }

  export type SaleItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateInput = {
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPurchasesInput
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    returnOutwards?: ReturnOutwardCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplierId: number
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    returnOutwards?: ReturnOutwardUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUpdateInput = {
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchasesNestedInput
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    returnOutwards?: ReturnOutwardUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    returnOutwards?: ReturnOutwardUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseCreateManyInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplierId: number
  }

  export type PurchaseUpdateManyMutationInput = {
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierPaymentCreateInput = {
    amount: number
    method?: string
    notes?: string | null
    createdAt?: Date | string
    purchase: PurchaseCreateNestedOneWithoutPaymentsInput
  }

  export type SupplierPaymentUncheckedCreateInput = {
    id?: number
    amount: number
    method?: string
    notes?: string | null
    createdAt?: Date | string
    purchaseId: number
  }

  export type SupplierPaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type SupplierPaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierPaymentCreateManyInput = {
    id?: number
    amount: number
    method?: string
    notes?: string | null
    createdAt?: Date | string
    purchaseId: number
  }

  export type SupplierPaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseItemCreateInput = {
    quantity: number
    costPrice: number
    product: ProductCreateNestedOneWithoutPurchaseItemsInput
    purchase: PurchaseCreateNestedOneWithoutItemsInput
  }

  export type PurchaseItemUncheckedCreateInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
    purchaseId: number
  }

  export type PurchaseItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseItemCreateManyInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
    purchaseId: number
  }

  export type PurchaseItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type PurchaseItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnInwardCreateInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    sale?: SaleCreateNestedOneWithoutReturnInwardsInput
    items?: ReturnInwardItemCreateNestedManyWithoutReturnInwardInput
  }

  export type ReturnInwardUncheckedCreateInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    saleId?: number | null
    items?: ReturnInwardItemUncheckedCreateNestedManyWithoutReturnInwardInput
  }

  export type ReturnInwardUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneWithoutReturnInwardsNestedInput
    items?: ReturnInwardItemUpdateManyWithoutReturnInwardNestedInput
  }

  export type ReturnInwardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ReturnInwardItemUncheckedUpdateManyWithoutReturnInwardNestedInput
  }

  export type ReturnInwardCreateManyInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    saleId?: number | null
  }

  export type ReturnInwardUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnInwardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReturnInwardItemCreateInput = {
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutReturnInItemsInput
    returnInward: ReturnInwardCreateNestedOneWithoutItemsInput
  }

  export type ReturnInwardItemUncheckedCreateInput = {
    id?: number
    quantity: number
    price: number
    productId: number
    returnInwardId: number
  }

  export type ReturnInwardItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReturnInItemsNestedInput
    returnInward?: ReturnInwardUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReturnInwardItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    returnInwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnInwardItemCreateManyInput = {
    id?: number
    quantity: number
    price: number
    productId: number
    returnInwardId: number
  }

  export type ReturnInwardItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ReturnInwardItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    returnInwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardCreateInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutReturnOutwardsInput
    purchase?: PurchaseCreateNestedOneWithoutReturnOutwardsInput
    items?: ReturnOutwardItemCreateNestedManyWithoutReturnOutwardInput
  }

  export type ReturnOutwardUncheckedCreateInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplierId: number
    purchaseId?: number | null
    items?: ReturnOutwardItemUncheckedCreateNestedManyWithoutReturnOutwardInput
  }

  export type ReturnOutwardUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutReturnOutwardsNestedInput
    purchase?: PurchaseUpdateOneWithoutReturnOutwardsNestedInput
    items?: ReturnOutwardItemUpdateManyWithoutReturnOutwardNestedInput
  }

  export type ReturnOutwardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ReturnOutwardItemUncheckedUpdateManyWithoutReturnOutwardNestedInput
  }

  export type ReturnOutwardCreateManyInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplierId: number
    purchaseId?: number | null
  }

  export type ReturnOutwardUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnOutwardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReturnOutwardItemCreateInput = {
    quantity: number
    costPrice: number
    product: ProductCreateNestedOneWithoutReturnOutItemsInput
    returnOutward: ReturnOutwardCreateNestedOneWithoutItemsInput
  }

  export type ReturnOutwardItemUncheckedCreateInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
    returnOutwardId: number
  }

  export type ReturnOutwardItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReturnOutItemsNestedInput
    returnOutward?: ReturnOutwardUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReturnOutwardItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    returnOutwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardItemCreateManyInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
    returnOutwardId: number
  }

  export type ReturnOutwardItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    returnOutwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpenseCreateInput = {
    title: string
    amount: number
    category?: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUncheckedCreateInput = {
    id?: number
    title: string
    amount: number
    category?: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: number
    title: string
    amount: number
    category?: string
    description?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentCreateInput = {
    change: number
    reason: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutStockAdjustmentsInput
  }

  export type StockAdjustmentUncheckedCreateInput = {
    id?: number
    productId: number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type StockAdjustmentUpdateInput = {
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockAdjustmentsNestedInput
  }

  export type StockAdjustmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentCreateManyInput = {
    id?: number
    productId: number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type StockAdjustmentUpdateManyMutationInput = {
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type ReturnOutwardListRelationFilter = {
    every?: ReturnOutwardWhereInput
    some?: ReturnOutwardWhereInput
    none?: ReturnOutwardWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReturnOutwardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type PurchaseItemListRelationFilter = {
    every?: PurchaseItemWhereInput
    some?: PurchaseItemWhereInput
    none?: PurchaseItemWhereInput
  }

  export type ReturnInwardItemListRelationFilter = {
    every?: ReturnInwardItemWhereInput
    some?: ReturnInwardItemWhereInput
    none?: ReturnInwardItemWhereInput
  }

  export type ReturnOutwardItemListRelationFilter = {
    every?: ReturnOutwardItemWhereInput
    some?: ReturnOutwardItemWhereInput
    none?: ReturnOutwardItemWhereInput
  }

  export type StockAdjustmentListRelationFilter = {
    every?: StockAdjustmentWhereInput
    some?: StockAdjustmentWhereInput
    none?: StockAdjustmentWhereInput
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReturnInwardItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReturnOutwardItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    costPrice?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReturnInwardListRelationFilter = {
    every?: ReturnInwardWhereInput
    some?: ReturnInwardWhereInput
    none?: ReturnInwardWhereInput
  }

  export type ReturnInwardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    status?: SortOrder
    voidReason?: SortOrder
    voidedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    userId?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    status?: SortOrder
    voidReason?: SortOrder
    voidedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    paymentMethod?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    status?: SortOrder
    voidReason?: SortOrder
    voidedAt?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    cashAmount?: SortOrder
    mpesaAmount?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type SaleRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    saleId?: SortOrder
  }

  export type SupplierRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type SupplierPaymentListRelationFilter = {
    every?: SupplierPaymentWhereInput
    some?: SupplierPaymentWhereInput
    none?: SupplierPaymentWhereInput
  }

  export type SupplierPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    paymentStatus?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    carriageInwards?: SortOrder
    amountPaid?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseRelationFilter = {
    is?: PurchaseWhereInput
    isNot?: PurchaseWhereInput
  }

  export type SupplierPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    purchaseId?: SortOrder
  }

  export type SupplierPaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    purchaseId?: SortOrder
  }

  export type SupplierPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    purchaseId?: SortOrder
  }

  export type SupplierPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    purchaseId?: SortOrder
  }

  export type SupplierPaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchaseItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchaseItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchaseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchaseItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type PurchaseItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    purchaseId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SaleNullableRelationFilter = {
    is?: SaleWhereInput | null
    isNot?: SaleWhereInput | null
  }

  export type ReturnInwardCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    saleId?: SortOrder
  }

  export type ReturnInwardAvgOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    saleId?: SortOrder
  }

  export type ReturnInwardMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    saleId?: SortOrder
  }

  export type ReturnInwardMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    saleId?: SortOrder
  }

  export type ReturnInwardSumOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    saleId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ReturnInwardRelationFilter = {
    is?: ReturnInwardWhereInput
    isNot?: ReturnInwardWhereInput
  }

  export type ReturnInwardItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
  }

  export type ReturnInwardItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
  }

  export type ReturnInwardItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
  }

  export type ReturnInwardItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
  }

  export type ReturnInwardItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    productId?: SortOrder
    returnInwardId?: SortOrder
  }

  export type PurchaseNullableRelationFilter = {
    is?: PurchaseWhereInput | null
    isNot?: PurchaseWhereInput | null
  }

  export type ReturnOutwardCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ReturnOutwardAvgOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ReturnOutwardMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ReturnOutwardMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ReturnOutwardSumOrderByAggregateInput = {
    id?: SortOrder
    totalAmount?: SortOrder
    supplierId?: SortOrder
    purchaseId?: SortOrder
  }

  export type ReturnOutwardRelationFilter = {
    is?: ReturnOutwardWhereInput
    isNot?: ReturnOutwardWhereInput
  }

  export type ReturnOutwardItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
  }

  export type ReturnOutwardItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
  }

  export type ReturnOutwardItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
  }

  export type ReturnOutwardItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
  }

  export type ReturnOutwardItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    costPrice?: SortOrder
    productId?: SortOrder
    returnOutwardId?: SortOrder
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type StockAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type StockAdjustmentAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
  }

  export type StockAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type StockAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type StockAdjustmentSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    change?: SortOrder
  }

  export type SaleCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SaleUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput> | SaleCreateWithoutUserInput[] | SaleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutUserInput | SaleCreateOrConnectWithoutUserInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutUserInput | SaleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaleCreateManyUserInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutUserInput | SaleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutUserInput | SaleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PurchaseCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type ReturnOutwardCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ReturnOutwardCreateWithoutSupplierInput, ReturnOutwardUncheckedCreateWithoutSupplierInput> | ReturnOutwardCreateWithoutSupplierInput[] | ReturnOutwardUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutSupplierInput | ReturnOutwardCreateOrConnectWithoutSupplierInput[]
    createMany?: ReturnOutwardCreateManySupplierInputEnvelope
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type ReturnOutwardUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ReturnOutwardCreateWithoutSupplierInput, ReturnOutwardUncheckedCreateWithoutSupplierInput> | ReturnOutwardCreateWithoutSupplierInput[] | ReturnOutwardUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutSupplierInput | ReturnOutwardCreateOrConnectWithoutSupplierInput[]
    createMany?: ReturnOutwardCreateManySupplierInputEnvelope
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PurchaseUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutSupplierInput | PurchaseUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutSupplierInput | PurchaseUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutSupplierInput | PurchaseUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type ReturnOutwardUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ReturnOutwardCreateWithoutSupplierInput, ReturnOutwardUncheckedCreateWithoutSupplierInput> | ReturnOutwardCreateWithoutSupplierInput[] | ReturnOutwardUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutSupplierInput | ReturnOutwardCreateOrConnectWithoutSupplierInput[]
    upsert?: ReturnOutwardUpsertWithWhereUniqueWithoutSupplierInput | ReturnOutwardUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ReturnOutwardCreateManySupplierInputEnvelope
    set?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    disconnect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    delete?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    update?: ReturnOutwardUpdateWithWhereUniqueWithoutSupplierInput | ReturnOutwardUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ReturnOutwardUpdateManyWithWhereWithoutSupplierInput | ReturnOutwardUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ReturnOutwardScalarWhereInput | ReturnOutwardScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput> | PurchaseCreateWithoutSupplierInput[] | PurchaseUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutSupplierInput | PurchaseCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutSupplierInput | PurchaseUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseCreateManySupplierInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutSupplierInput | PurchaseUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutSupplierInput | PurchaseUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type ReturnOutwardUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ReturnOutwardCreateWithoutSupplierInput, ReturnOutwardUncheckedCreateWithoutSupplierInput> | ReturnOutwardCreateWithoutSupplierInput[] | ReturnOutwardUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutSupplierInput | ReturnOutwardCreateOrConnectWithoutSupplierInput[]
    upsert?: ReturnOutwardUpsertWithWhereUniqueWithoutSupplierInput | ReturnOutwardUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ReturnOutwardCreateManySupplierInputEnvelope
    set?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    disconnect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    delete?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    update?: ReturnOutwardUpdateWithWhereUniqueWithoutSupplierInput | ReturnOutwardUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ReturnOutwardUpdateManyWithWhereWithoutSupplierInput | ReturnOutwardUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ReturnOutwardScalarWhereInput | ReturnOutwardScalarWhereInput[]
  }

  export type SaleItemCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type PurchaseItemCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type ReturnInwardItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ReturnInwardItemCreateWithoutProductInput, ReturnInwardItemUncheckedCreateWithoutProductInput> | ReturnInwardItemCreateWithoutProductInput[] | ReturnInwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutProductInput | ReturnInwardItemCreateOrConnectWithoutProductInput[]
    createMany?: ReturnInwardItemCreateManyProductInputEnvelope
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
  }

  export type ReturnOutwardItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutProductInput, ReturnOutwardItemUncheckedCreateWithoutProductInput> | ReturnOutwardItemCreateWithoutProductInput[] | ReturnOutwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutProductInput | ReturnOutwardItemCreateOrConnectWithoutProductInput[]
    createMany?: ReturnOutwardItemCreateManyProductInputEnvelope
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
  }

  export type StockAdjustmentCreateNestedManyWithoutProductInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type ReturnInwardItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReturnInwardItemCreateWithoutProductInput, ReturnInwardItemUncheckedCreateWithoutProductInput> | ReturnInwardItemCreateWithoutProductInput[] | ReturnInwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutProductInput | ReturnInwardItemCreateOrConnectWithoutProductInput[]
    createMany?: ReturnInwardItemCreateManyProductInputEnvelope
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
  }

  export type ReturnOutwardItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutProductInput, ReturnOutwardItemUncheckedCreateWithoutProductInput> | ReturnOutwardItemCreateWithoutProductInput[] | ReturnOutwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutProductInput | ReturnOutwardItemCreateOrConnectWithoutProductInput[]
    createMany?: ReturnOutwardItemCreateManyProductInputEnvelope
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
  }

  export type StockAdjustmentUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type PurchaseItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutProductInput | PurchaseItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutProductInput | PurchaseItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutProductInput | PurchaseItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type ReturnInwardItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReturnInwardItemCreateWithoutProductInput, ReturnInwardItemUncheckedCreateWithoutProductInput> | ReturnInwardItemCreateWithoutProductInput[] | ReturnInwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutProductInput | ReturnInwardItemCreateOrConnectWithoutProductInput[]
    upsert?: ReturnInwardItemUpsertWithWhereUniqueWithoutProductInput | ReturnInwardItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReturnInwardItemCreateManyProductInputEnvelope
    set?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    disconnect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    delete?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    update?: ReturnInwardItemUpdateWithWhereUniqueWithoutProductInput | ReturnInwardItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReturnInwardItemUpdateManyWithWhereWithoutProductInput | ReturnInwardItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReturnInwardItemScalarWhereInput | ReturnInwardItemScalarWhereInput[]
  }

  export type ReturnOutwardItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutProductInput, ReturnOutwardItemUncheckedCreateWithoutProductInput> | ReturnOutwardItemCreateWithoutProductInput[] | ReturnOutwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutProductInput | ReturnOutwardItemCreateOrConnectWithoutProductInput[]
    upsert?: ReturnOutwardItemUpsertWithWhereUniqueWithoutProductInput | ReturnOutwardItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReturnOutwardItemCreateManyProductInputEnvelope
    set?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    disconnect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    delete?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    update?: ReturnOutwardItemUpdateWithWhereUniqueWithoutProductInput | ReturnOutwardItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReturnOutwardItemUpdateManyWithWhereWithoutProductInput | ReturnOutwardItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReturnOutwardItemScalarWhereInput | ReturnOutwardItemScalarWhereInput[]
  }

  export type StockAdjustmentUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    upsert?: StockAdjustmentUpsertWithWhereUniqueWithoutProductInput | StockAdjustmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    set?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    disconnect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    delete?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    update?: StockAdjustmentUpdateWithWhereUniqueWithoutProductInput | StockAdjustmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockAdjustmentUpdateManyWithWhereWithoutProductInput | StockAdjustmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput> | SaleItemCreateWithoutProductInput[] | SaleItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutProductInput | SaleItemCreateOrConnectWithoutProductInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutProductInput | SaleItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleItemCreateManyProductInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutProductInput | SaleItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutProductInput | SaleItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput> | PurchaseItemCreateWithoutProductInput[] | PurchaseItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutProductInput | PurchaseItemCreateOrConnectWithoutProductInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutProductInput | PurchaseItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PurchaseItemCreateManyProductInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutProductInput | PurchaseItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutProductInput | PurchaseItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type ReturnInwardItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReturnInwardItemCreateWithoutProductInput, ReturnInwardItemUncheckedCreateWithoutProductInput> | ReturnInwardItemCreateWithoutProductInput[] | ReturnInwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutProductInput | ReturnInwardItemCreateOrConnectWithoutProductInput[]
    upsert?: ReturnInwardItemUpsertWithWhereUniqueWithoutProductInput | ReturnInwardItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReturnInwardItemCreateManyProductInputEnvelope
    set?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    disconnect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    delete?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    update?: ReturnInwardItemUpdateWithWhereUniqueWithoutProductInput | ReturnInwardItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReturnInwardItemUpdateManyWithWhereWithoutProductInput | ReturnInwardItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReturnInwardItemScalarWhereInput | ReturnInwardItemScalarWhereInput[]
  }

  export type ReturnOutwardItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutProductInput, ReturnOutwardItemUncheckedCreateWithoutProductInput> | ReturnOutwardItemCreateWithoutProductInput[] | ReturnOutwardItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutProductInput | ReturnOutwardItemCreateOrConnectWithoutProductInput[]
    upsert?: ReturnOutwardItemUpsertWithWhereUniqueWithoutProductInput | ReturnOutwardItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReturnOutwardItemCreateManyProductInputEnvelope
    set?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    disconnect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    delete?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    update?: ReturnOutwardItemUpdateWithWhereUniqueWithoutProductInput | ReturnOutwardItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReturnOutwardItemUpdateManyWithWhereWithoutProductInput | ReturnOutwardItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReturnOutwardItemScalarWhereInput | ReturnOutwardItemScalarWhereInput[]
  }

  export type StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput> | StockAdjustmentCreateWithoutProductInput[] | StockAdjustmentUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockAdjustmentCreateOrConnectWithoutProductInput | StockAdjustmentCreateOrConnectWithoutProductInput[]
    upsert?: StockAdjustmentUpsertWithWhereUniqueWithoutProductInput | StockAdjustmentUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockAdjustmentCreateManyProductInputEnvelope
    set?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    disconnect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    delete?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    connect?: StockAdjustmentWhereUniqueInput | StockAdjustmentWhereUniqueInput[]
    update?: StockAdjustmentUpdateWithWhereUniqueWithoutProductInput | StockAdjustmentUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockAdjustmentUpdateManyWithWhereWithoutProductInput | StockAdjustmentUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type ReturnInwardCreateNestedManyWithoutSaleInput = {
    create?: XOR<ReturnInwardCreateWithoutSaleInput, ReturnInwardUncheckedCreateWithoutSaleInput> | ReturnInwardCreateWithoutSaleInput[] | ReturnInwardUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ReturnInwardCreateOrConnectWithoutSaleInput | ReturnInwardCreateOrConnectWithoutSaleInput[]
    createMany?: ReturnInwardCreateManySaleInputEnvelope
    connect?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type ReturnInwardUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<ReturnInwardCreateWithoutSaleInput, ReturnInwardUncheckedCreateWithoutSaleInput> | ReturnInwardCreateWithoutSaleInput[] | ReturnInwardUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ReturnInwardCreateOrConnectWithoutSaleInput | ReturnInwardCreateOrConnectWithoutSaleInput[]
    createMany?: ReturnInwardCreateManySaleInputEnvelope
    connect?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type ReturnInwardUpdateManyWithoutSaleNestedInput = {
    create?: XOR<ReturnInwardCreateWithoutSaleInput, ReturnInwardUncheckedCreateWithoutSaleInput> | ReturnInwardCreateWithoutSaleInput[] | ReturnInwardUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ReturnInwardCreateOrConnectWithoutSaleInput | ReturnInwardCreateOrConnectWithoutSaleInput[]
    upsert?: ReturnInwardUpsertWithWhereUniqueWithoutSaleInput | ReturnInwardUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: ReturnInwardCreateManySaleInputEnvelope
    set?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    disconnect?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    delete?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    connect?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    update?: ReturnInwardUpdateWithWhereUniqueWithoutSaleInput | ReturnInwardUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: ReturnInwardUpdateManyWithWhereWithoutSaleInput | ReturnInwardUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: ReturnInwardScalarWhereInput | ReturnInwardScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type ReturnInwardUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<ReturnInwardCreateWithoutSaleInput, ReturnInwardUncheckedCreateWithoutSaleInput> | ReturnInwardCreateWithoutSaleInput[] | ReturnInwardUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: ReturnInwardCreateOrConnectWithoutSaleInput | ReturnInwardCreateOrConnectWithoutSaleInput[]
    upsert?: ReturnInwardUpsertWithWhereUniqueWithoutSaleInput | ReturnInwardUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: ReturnInwardCreateManySaleInputEnvelope
    set?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    disconnect?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    delete?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    connect?: ReturnInwardWhereUniqueInput | ReturnInwardWhereUniqueInput[]
    update?: ReturnInwardUpdateWithWhereUniqueWithoutSaleInput | ReturnInwardUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: ReturnInwardUpdateManyWithWhereWithoutSaleInput | ReturnInwardUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: ReturnInwardScalarWhereInput | ReturnInwardScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSaleItemsInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSaleItemsNestedInput = {
    create?: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSaleItemsInput
    upsert?: ProductUpsertWithoutSaleItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSaleItemsInput, ProductUpdateWithoutSaleItemsInput>, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SupplierCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchasesInput
    connect?: SupplierWhereUniqueInput
  }

  export type PurchaseItemCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type ReturnOutwardCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ReturnOutwardCreateWithoutPurchaseInput, ReturnOutwardUncheckedCreateWithoutPurchaseInput> | ReturnOutwardCreateWithoutPurchaseInput[] | ReturnOutwardUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutPurchaseInput | ReturnOutwardCreateOrConnectWithoutPurchaseInput[]
    createMany?: ReturnOutwardCreateManyPurchaseInputEnvelope
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
  }

  export type SupplierPaymentCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<SupplierPaymentCreateWithoutPurchaseInput, SupplierPaymentUncheckedCreateWithoutPurchaseInput> | SupplierPaymentCreateWithoutPurchaseInput[] | SupplierPaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutPurchaseInput | SupplierPaymentCreateOrConnectWithoutPurchaseInput[]
    createMany?: SupplierPaymentCreateManyPurchaseInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
  }

  export type ReturnOutwardUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<ReturnOutwardCreateWithoutPurchaseInput, ReturnOutwardUncheckedCreateWithoutPurchaseInput> | ReturnOutwardCreateWithoutPurchaseInput[] | ReturnOutwardUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutPurchaseInput | ReturnOutwardCreateOrConnectWithoutPurchaseInput[]
    createMany?: ReturnOutwardCreateManyPurchaseInputEnvelope
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
  }

  export type SupplierPaymentUncheckedCreateNestedManyWithoutPurchaseInput = {
    create?: XOR<SupplierPaymentCreateWithoutPurchaseInput, SupplierPaymentUncheckedCreateWithoutPurchaseInput> | SupplierPaymentCreateWithoutPurchaseInput[] | SupplierPaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutPurchaseInput | SupplierPaymentCreateOrConnectWithoutPurchaseInput[]
    createMany?: SupplierPaymentCreateManyPurchaseInputEnvelope
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
  }

  export type SupplierUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchasesInput
    upsert?: SupplierUpsertWithoutPurchasesInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPurchasesInput, SupplierUpdateWithoutPurchasesInput>, SupplierUncheckedUpdateWithoutPurchasesInput>
  }

  export type PurchaseItemUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type ReturnOutwardUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ReturnOutwardCreateWithoutPurchaseInput, ReturnOutwardUncheckedCreateWithoutPurchaseInput> | ReturnOutwardCreateWithoutPurchaseInput[] | ReturnOutwardUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutPurchaseInput | ReturnOutwardCreateOrConnectWithoutPurchaseInput[]
    upsert?: ReturnOutwardUpsertWithWhereUniqueWithoutPurchaseInput | ReturnOutwardUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ReturnOutwardCreateManyPurchaseInputEnvelope
    set?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    disconnect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    delete?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    update?: ReturnOutwardUpdateWithWhereUniqueWithoutPurchaseInput | ReturnOutwardUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ReturnOutwardUpdateManyWithWhereWithoutPurchaseInput | ReturnOutwardUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ReturnOutwardScalarWhereInput | ReturnOutwardScalarWhereInput[]
  }

  export type SupplierPaymentUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutPurchaseInput, SupplierPaymentUncheckedCreateWithoutPurchaseInput> | SupplierPaymentCreateWithoutPurchaseInput[] | SupplierPaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutPurchaseInput | SupplierPaymentCreateOrConnectWithoutPurchaseInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutPurchaseInput | SupplierPaymentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: SupplierPaymentCreateManyPurchaseInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutPurchaseInput | SupplierPaymentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutPurchaseInput | SupplierPaymentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput> | PurchaseItemCreateWithoutPurchaseInput[] | PurchaseItemUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: PurchaseItemCreateOrConnectWithoutPurchaseInput | PurchaseItemCreateOrConnectWithoutPurchaseInput[]
    upsert?: PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: PurchaseItemCreateManyPurchaseInputEnvelope
    set?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    disconnect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    delete?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    connect?: PurchaseItemWhereUniqueInput | PurchaseItemWhereUniqueInput[]
    update?: PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput | PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: PurchaseItemUpdateManyWithWhereWithoutPurchaseInput | PurchaseItemUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
  }

  export type ReturnOutwardUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<ReturnOutwardCreateWithoutPurchaseInput, ReturnOutwardUncheckedCreateWithoutPurchaseInput> | ReturnOutwardCreateWithoutPurchaseInput[] | ReturnOutwardUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutPurchaseInput | ReturnOutwardCreateOrConnectWithoutPurchaseInput[]
    upsert?: ReturnOutwardUpsertWithWhereUniqueWithoutPurchaseInput | ReturnOutwardUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: ReturnOutwardCreateManyPurchaseInputEnvelope
    set?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    disconnect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    delete?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    connect?: ReturnOutwardWhereUniqueInput | ReturnOutwardWhereUniqueInput[]
    update?: ReturnOutwardUpdateWithWhereUniqueWithoutPurchaseInput | ReturnOutwardUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: ReturnOutwardUpdateManyWithWhereWithoutPurchaseInput | ReturnOutwardUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: ReturnOutwardScalarWhereInput | ReturnOutwardScalarWhereInput[]
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutPurchaseNestedInput = {
    create?: XOR<SupplierPaymentCreateWithoutPurchaseInput, SupplierPaymentUncheckedCreateWithoutPurchaseInput> | SupplierPaymentCreateWithoutPurchaseInput[] | SupplierPaymentUncheckedCreateWithoutPurchaseInput[]
    connectOrCreate?: SupplierPaymentCreateOrConnectWithoutPurchaseInput | SupplierPaymentCreateOrConnectWithoutPurchaseInput[]
    upsert?: SupplierPaymentUpsertWithWhereUniqueWithoutPurchaseInput | SupplierPaymentUpsertWithWhereUniqueWithoutPurchaseInput[]
    createMany?: SupplierPaymentCreateManyPurchaseInputEnvelope
    set?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    disconnect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    delete?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    connect?: SupplierPaymentWhereUniqueInput | SupplierPaymentWhereUniqueInput[]
    update?: SupplierPaymentUpdateWithWhereUniqueWithoutPurchaseInput | SupplierPaymentUpdateWithWhereUniqueWithoutPurchaseInput[]
    updateMany?: SupplierPaymentUpdateManyWithWhereWithoutPurchaseInput | SupplierPaymentUpdateManyWithWhereWithoutPurchaseInput[]
    deleteMany?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
  }

  export type PurchaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type PurchaseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutPaymentsInput
    upsert?: PurchaseUpsertWithoutPaymentsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutPaymentsInput, PurchaseUpdateWithoutPaymentsInput>, PurchaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProductCreateNestedOneWithoutPurchaseItemsInput = {
    create?: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutItemsInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput = {
    create?: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPurchaseItemsInput
    upsert?: ProductUpsertWithoutPurchaseItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPurchaseItemsInput, ProductUpdateWithoutPurchaseItemsInput>, ProductUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type PurchaseUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutItemsInput
    upsert?: PurchaseUpsertWithoutItemsInput
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutItemsInput, PurchaseUpdateWithoutItemsInput>, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type SaleCreateNestedOneWithoutReturnInwardsInput = {
    create?: XOR<SaleCreateWithoutReturnInwardsInput, SaleUncheckedCreateWithoutReturnInwardsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutReturnInwardsInput
    connect?: SaleWhereUniqueInput
  }

  export type ReturnInwardItemCreateNestedManyWithoutReturnInwardInput = {
    create?: XOR<ReturnInwardItemCreateWithoutReturnInwardInput, ReturnInwardItemUncheckedCreateWithoutReturnInwardInput> | ReturnInwardItemCreateWithoutReturnInwardInput[] | ReturnInwardItemUncheckedCreateWithoutReturnInwardInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutReturnInwardInput | ReturnInwardItemCreateOrConnectWithoutReturnInwardInput[]
    createMany?: ReturnInwardItemCreateManyReturnInwardInputEnvelope
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
  }

  export type ReturnInwardItemUncheckedCreateNestedManyWithoutReturnInwardInput = {
    create?: XOR<ReturnInwardItemCreateWithoutReturnInwardInput, ReturnInwardItemUncheckedCreateWithoutReturnInwardInput> | ReturnInwardItemCreateWithoutReturnInwardInput[] | ReturnInwardItemUncheckedCreateWithoutReturnInwardInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutReturnInwardInput | ReturnInwardItemCreateOrConnectWithoutReturnInwardInput[]
    createMany?: ReturnInwardItemCreateManyReturnInwardInputEnvelope
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
  }

  export type SaleUpdateOneWithoutReturnInwardsNestedInput = {
    create?: XOR<SaleCreateWithoutReturnInwardsInput, SaleUncheckedCreateWithoutReturnInwardsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutReturnInwardsInput
    upsert?: SaleUpsertWithoutReturnInwardsInput
    disconnect?: SaleWhereInput | boolean
    delete?: SaleWhereInput | boolean
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutReturnInwardsInput, SaleUpdateWithoutReturnInwardsInput>, SaleUncheckedUpdateWithoutReturnInwardsInput>
  }

  export type ReturnInwardItemUpdateManyWithoutReturnInwardNestedInput = {
    create?: XOR<ReturnInwardItemCreateWithoutReturnInwardInput, ReturnInwardItemUncheckedCreateWithoutReturnInwardInput> | ReturnInwardItemCreateWithoutReturnInwardInput[] | ReturnInwardItemUncheckedCreateWithoutReturnInwardInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutReturnInwardInput | ReturnInwardItemCreateOrConnectWithoutReturnInwardInput[]
    upsert?: ReturnInwardItemUpsertWithWhereUniqueWithoutReturnInwardInput | ReturnInwardItemUpsertWithWhereUniqueWithoutReturnInwardInput[]
    createMany?: ReturnInwardItemCreateManyReturnInwardInputEnvelope
    set?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    disconnect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    delete?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    update?: ReturnInwardItemUpdateWithWhereUniqueWithoutReturnInwardInput | ReturnInwardItemUpdateWithWhereUniqueWithoutReturnInwardInput[]
    updateMany?: ReturnInwardItemUpdateManyWithWhereWithoutReturnInwardInput | ReturnInwardItemUpdateManyWithWhereWithoutReturnInwardInput[]
    deleteMany?: ReturnInwardItemScalarWhereInput | ReturnInwardItemScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReturnInwardItemUncheckedUpdateManyWithoutReturnInwardNestedInput = {
    create?: XOR<ReturnInwardItemCreateWithoutReturnInwardInput, ReturnInwardItemUncheckedCreateWithoutReturnInwardInput> | ReturnInwardItemCreateWithoutReturnInwardInput[] | ReturnInwardItemUncheckedCreateWithoutReturnInwardInput[]
    connectOrCreate?: ReturnInwardItemCreateOrConnectWithoutReturnInwardInput | ReturnInwardItemCreateOrConnectWithoutReturnInwardInput[]
    upsert?: ReturnInwardItemUpsertWithWhereUniqueWithoutReturnInwardInput | ReturnInwardItemUpsertWithWhereUniqueWithoutReturnInwardInput[]
    createMany?: ReturnInwardItemCreateManyReturnInwardInputEnvelope
    set?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    disconnect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    delete?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    connect?: ReturnInwardItemWhereUniqueInput | ReturnInwardItemWhereUniqueInput[]
    update?: ReturnInwardItemUpdateWithWhereUniqueWithoutReturnInwardInput | ReturnInwardItemUpdateWithWhereUniqueWithoutReturnInwardInput[]
    updateMany?: ReturnInwardItemUpdateManyWithWhereWithoutReturnInwardInput | ReturnInwardItemUpdateManyWithWhereWithoutReturnInwardInput[]
    deleteMany?: ReturnInwardItemScalarWhereInput | ReturnInwardItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutReturnInItemsInput = {
    create?: XOR<ProductCreateWithoutReturnInItemsInput, ProductUncheckedCreateWithoutReturnInItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReturnInItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ReturnInwardCreateNestedOneWithoutItemsInput = {
    create?: XOR<ReturnInwardCreateWithoutItemsInput, ReturnInwardUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReturnInwardCreateOrConnectWithoutItemsInput
    connect?: ReturnInwardWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutReturnInItemsNestedInput = {
    create?: XOR<ProductCreateWithoutReturnInItemsInput, ProductUncheckedCreateWithoutReturnInItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReturnInItemsInput
    upsert?: ProductUpsertWithoutReturnInItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReturnInItemsInput, ProductUpdateWithoutReturnInItemsInput>, ProductUncheckedUpdateWithoutReturnInItemsInput>
  }

  export type ReturnInwardUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ReturnInwardCreateWithoutItemsInput, ReturnInwardUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReturnInwardCreateOrConnectWithoutItemsInput
    upsert?: ReturnInwardUpsertWithoutItemsInput
    connect?: ReturnInwardWhereUniqueInput
    update?: XOR<XOR<ReturnInwardUpdateToOneWithWhereWithoutItemsInput, ReturnInwardUpdateWithoutItemsInput>, ReturnInwardUncheckedUpdateWithoutItemsInput>
  }

  export type SupplierCreateNestedOneWithoutReturnOutwardsInput = {
    create?: XOR<SupplierCreateWithoutReturnOutwardsInput, SupplierUncheckedCreateWithoutReturnOutwardsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutReturnOutwardsInput
    connect?: SupplierWhereUniqueInput
  }

  export type PurchaseCreateNestedOneWithoutReturnOutwardsInput = {
    create?: XOR<PurchaseCreateWithoutReturnOutwardsInput, PurchaseUncheckedCreateWithoutReturnOutwardsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReturnOutwardsInput
    connect?: PurchaseWhereUniqueInput
  }

  export type ReturnOutwardItemCreateNestedManyWithoutReturnOutwardInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput> | ReturnOutwardItemCreateWithoutReturnOutwardInput[] | ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput | ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput[]
    createMany?: ReturnOutwardItemCreateManyReturnOutwardInputEnvelope
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
  }

  export type ReturnOutwardItemUncheckedCreateNestedManyWithoutReturnOutwardInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput> | ReturnOutwardItemCreateWithoutReturnOutwardInput[] | ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput | ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput[]
    createMany?: ReturnOutwardItemCreateManyReturnOutwardInputEnvelope
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
  }

  export type SupplierUpdateOneRequiredWithoutReturnOutwardsNestedInput = {
    create?: XOR<SupplierCreateWithoutReturnOutwardsInput, SupplierUncheckedCreateWithoutReturnOutwardsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutReturnOutwardsInput
    upsert?: SupplierUpsertWithoutReturnOutwardsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutReturnOutwardsInput, SupplierUpdateWithoutReturnOutwardsInput>, SupplierUncheckedUpdateWithoutReturnOutwardsInput>
  }

  export type PurchaseUpdateOneWithoutReturnOutwardsNestedInput = {
    create?: XOR<PurchaseCreateWithoutReturnOutwardsInput, PurchaseUncheckedCreateWithoutReturnOutwardsInput>
    connectOrCreate?: PurchaseCreateOrConnectWithoutReturnOutwardsInput
    upsert?: PurchaseUpsertWithoutReturnOutwardsInput
    disconnect?: PurchaseWhereInput | boolean
    delete?: PurchaseWhereInput | boolean
    connect?: PurchaseWhereUniqueInput
    update?: XOR<XOR<PurchaseUpdateToOneWithWhereWithoutReturnOutwardsInput, PurchaseUpdateWithoutReturnOutwardsInput>, PurchaseUncheckedUpdateWithoutReturnOutwardsInput>
  }

  export type ReturnOutwardItemUpdateManyWithoutReturnOutwardNestedInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput> | ReturnOutwardItemCreateWithoutReturnOutwardInput[] | ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput | ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput[]
    upsert?: ReturnOutwardItemUpsertWithWhereUniqueWithoutReturnOutwardInput | ReturnOutwardItemUpsertWithWhereUniqueWithoutReturnOutwardInput[]
    createMany?: ReturnOutwardItemCreateManyReturnOutwardInputEnvelope
    set?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    disconnect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    delete?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    update?: ReturnOutwardItemUpdateWithWhereUniqueWithoutReturnOutwardInput | ReturnOutwardItemUpdateWithWhereUniqueWithoutReturnOutwardInput[]
    updateMany?: ReturnOutwardItemUpdateManyWithWhereWithoutReturnOutwardInput | ReturnOutwardItemUpdateManyWithWhereWithoutReturnOutwardInput[]
    deleteMany?: ReturnOutwardItemScalarWhereInput | ReturnOutwardItemScalarWhereInput[]
  }

  export type ReturnOutwardItemUncheckedUpdateManyWithoutReturnOutwardNestedInput = {
    create?: XOR<ReturnOutwardItemCreateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput> | ReturnOutwardItemCreateWithoutReturnOutwardInput[] | ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput[]
    connectOrCreate?: ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput | ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput[]
    upsert?: ReturnOutwardItemUpsertWithWhereUniqueWithoutReturnOutwardInput | ReturnOutwardItemUpsertWithWhereUniqueWithoutReturnOutwardInput[]
    createMany?: ReturnOutwardItemCreateManyReturnOutwardInputEnvelope
    set?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    disconnect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    delete?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    connect?: ReturnOutwardItemWhereUniqueInput | ReturnOutwardItemWhereUniqueInput[]
    update?: ReturnOutwardItemUpdateWithWhereUniqueWithoutReturnOutwardInput | ReturnOutwardItemUpdateWithWhereUniqueWithoutReturnOutwardInput[]
    updateMany?: ReturnOutwardItemUpdateManyWithWhereWithoutReturnOutwardInput | ReturnOutwardItemUpdateManyWithWhereWithoutReturnOutwardInput[]
    deleteMany?: ReturnOutwardItemScalarWhereInput | ReturnOutwardItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutReturnOutItemsInput = {
    create?: XOR<ProductCreateWithoutReturnOutItemsInput, ProductUncheckedCreateWithoutReturnOutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReturnOutItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ReturnOutwardCreateNestedOneWithoutItemsInput = {
    create?: XOR<ReturnOutwardCreateWithoutItemsInput, ReturnOutwardUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutItemsInput
    connect?: ReturnOutwardWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutReturnOutItemsNestedInput = {
    create?: XOR<ProductCreateWithoutReturnOutItemsInput, ProductUncheckedCreateWithoutReturnOutItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReturnOutItemsInput
    upsert?: ProductUpsertWithoutReturnOutItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReturnOutItemsInput, ProductUpdateWithoutReturnOutItemsInput>, ProductUncheckedUpdateWithoutReturnOutItemsInput>
  }

  export type ReturnOutwardUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ReturnOutwardCreateWithoutItemsInput, ReturnOutwardUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReturnOutwardCreateOrConnectWithoutItemsInput
    upsert?: ReturnOutwardUpsertWithoutItemsInput
    connect?: ReturnOutwardWhereUniqueInput
    update?: XOR<XOR<ReturnOutwardUpdateToOneWithWhereWithoutItemsInput, ReturnOutwardUpdateWithoutItemsInput>, ReturnOutwardUncheckedUpdateWithoutItemsInput>
  }

  export type ProductCreateNestedOneWithoutStockAdjustmentsInput = {
    create?: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockAdjustmentsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockAdjustmentsNestedInput = {
    create?: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockAdjustmentsInput
    upsert?: ProductUpsertWithoutStockAdjustmentsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockAdjustmentsInput, ProductUpdateWithoutStockAdjustmentsInput>, ProductUncheckedUpdateWithoutStockAdjustmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SaleCreateWithoutUserInput = {
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    items?: SaleItemCreateNestedManyWithoutSaleInput
    returnInwards?: ReturnInwardCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutUserInput = {
    id?: number
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    returnInwards?: ReturnInwardUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutUserInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleCreateManyUserInputEnvelope = {
    data: SaleCreateManyUserInput | SaleCreateManyUserInput[]
  }

  export type SaleUpsertWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
    create: XOR<SaleCreateWithoutUserInput, SaleUncheckedCreateWithoutUserInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutUserInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutUserInput, SaleUncheckedUpdateWithoutUserInput>
  }

  export type SaleUpdateManyWithWhereWithoutUserInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutUserInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: IntFilter<"Sale"> | number
    total?: FloatFilter<"Sale"> | number
    paymentMethod?: StringFilter<"Sale"> | string
    cashAmount?: FloatFilter<"Sale"> | number
    mpesaAmount?: FloatFilter<"Sale"> | number
    status?: StringFilter<"Sale"> | string
    voidReason?: StringNullableFilter<"Sale"> | string | null
    voidedAt?: DateTimeNullableFilter<"Sale"> | Date | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    userId?: IntFilter<"Sale"> | number
  }

  export type PurchaseCreateWithoutSupplierInput = {
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    returnOutwards?: ReturnOutwardCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutSupplierInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    returnOutwards?: ReturnOutwardUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutSupplierInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseCreateManySupplierInputEnvelope = {
    data: PurchaseCreateManySupplierInput | PurchaseCreateManySupplierInput[]
  }

  export type ReturnOutwardCreateWithoutSupplierInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    purchase?: PurchaseCreateNestedOneWithoutReturnOutwardsInput
    items?: ReturnOutwardItemCreateNestedManyWithoutReturnOutwardInput
  }

  export type ReturnOutwardUncheckedCreateWithoutSupplierInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    purchaseId?: number | null
    items?: ReturnOutwardItemUncheckedCreateNestedManyWithoutReturnOutwardInput
  }

  export type ReturnOutwardCreateOrConnectWithoutSupplierInput = {
    where: ReturnOutwardWhereUniqueInput
    create: XOR<ReturnOutwardCreateWithoutSupplierInput, ReturnOutwardUncheckedCreateWithoutSupplierInput>
  }

  export type ReturnOutwardCreateManySupplierInputEnvelope = {
    data: ReturnOutwardCreateManySupplierInput | ReturnOutwardCreateManySupplierInput[]
  }

  export type PurchaseUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutSupplierInput, PurchaseUncheckedUpdateWithoutSupplierInput>
    create: XOR<PurchaseCreateWithoutSupplierInput, PurchaseUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutSupplierInput, PurchaseUncheckedUpdateWithoutSupplierInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutSupplierInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutSupplierInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    referenceNo?: StringNullableFilter<"Purchase"> | string | null
    totalAmount?: FloatFilter<"Purchase"> | number
    carriageInwards?: FloatFilter<"Purchase"> | number
    amountPaid?: FloatFilter<"Purchase"> | number
    paymentStatus?: StringFilter<"Purchase"> | string
    notes?: StringNullableFilter<"Purchase"> | string | null
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    supplierId?: IntFilter<"Purchase"> | number
  }

  export type ReturnOutwardUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ReturnOutwardWhereUniqueInput
    update: XOR<ReturnOutwardUpdateWithoutSupplierInput, ReturnOutwardUncheckedUpdateWithoutSupplierInput>
    create: XOR<ReturnOutwardCreateWithoutSupplierInput, ReturnOutwardUncheckedCreateWithoutSupplierInput>
  }

  export type ReturnOutwardUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ReturnOutwardWhereUniqueInput
    data: XOR<ReturnOutwardUpdateWithoutSupplierInput, ReturnOutwardUncheckedUpdateWithoutSupplierInput>
  }

  export type ReturnOutwardUpdateManyWithWhereWithoutSupplierInput = {
    where: ReturnOutwardScalarWhereInput
    data: XOR<ReturnOutwardUpdateManyMutationInput, ReturnOutwardUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ReturnOutwardScalarWhereInput = {
    AND?: ReturnOutwardScalarWhereInput | ReturnOutwardScalarWhereInput[]
    OR?: ReturnOutwardScalarWhereInput[]
    NOT?: ReturnOutwardScalarWhereInput | ReturnOutwardScalarWhereInput[]
    id?: IntFilter<"ReturnOutward"> | number
    reason?: StringFilter<"ReturnOutward"> | string
    totalAmount?: FloatFilter<"ReturnOutward"> | number
    createdAt?: DateTimeFilter<"ReturnOutward"> | Date | string
    supplierId?: IntFilter<"ReturnOutward"> | number
    purchaseId?: IntNullableFilter<"ReturnOutward"> | number | null
  }

  export type SaleItemCreateWithoutProductInput = {
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    saleId: number
  }

  export type SaleItemCreateOrConnectWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemCreateManyProductInputEnvelope = {
    data: SaleItemCreateManyProductInput | SaleItemCreateManyProductInput[]
  }

  export type PurchaseItemCreateWithoutProductInput = {
    quantity: number
    costPrice: number
    purchase: PurchaseCreateNestedOneWithoutItemsInput
  }

  export type PurchaseItemUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    costPrice: number
    purchaseId: number
  }

  export type PurchaseItemCreateOrConnectWithoutProductInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput>
  }

  export type PurchaseItemCreateManyProductInputEnvelope = {
    data: PurchaseItemCreateManyProductInput | PurchaseItemCreateManyProductInput[]
  }

  export type ReturnInwardItemCreateWithoutProductInput = {
    quantity: number
    price: number
    returnInward: ReturnInwardCreateNestedOneWithoutItemsInput
  }

  export type ReturnInwardItemUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    price: number
    returnInwardId: number
  }

  export type ReturnInwardItemCreateOrConnectWithoutProductInput = {
    where: ReturnInwardItemWhereUniqueInput
    create: XOR<ReturnInwardItemCreateWithoutProductInput, ReturnInwardItemUncheckedCreateWithoutProductInput>
  }

  export type ReturnInwardItemCreateManyProductInputEnvelope = {
    data: ReturnInwardItemCreateManyProductInput | ReturnInwardItemCreateManyProductInput[]
  }

  export type ReturnOutwardItemCreateWithoutProductInput = {
    quantity: number
    costPrice: number
    returnOutward: ReturnOutwardCreateNestedOneWithoutItemsInput
  }

  export type ReturnOutwardItemUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    costPrice: number
    returnOutwardId: number
  }

  export type ReturnOutwardItemCreateOrConnectWithoutProductInput = {
    where: ReturnOutwardItemWhereUniqueInput
    create: XOR<ReturnOutwardItemCreateWithoutProductInput, ReturnOutwardItemUncheckedCreateWithoutProductInput>
  }

  export type ReturnOutwardItemCreateManyProductInputEnvelope = {
    data: ReturnOutwardItemCreateManyProductInput | ReturnOutwardItemCreateManyProductInput[]
  }

  export type StockAdjustmentCreateWithoutProductInput = {
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type StockAdjustmentUncheckedCreateWithoutProductInput = {
    id?: number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type StockAdjustmentCreateOrConnectWithoutProductInput = {
    where: StockAdjustmentWhereUniqueInput
    create: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput>
  }

  export type StockAdjustmentCreateManyProductInputEnvelope = {
    data: StockAdjustmentCreateManyProductInput | StockAdjustmentCreateManyProductInput[]
  }

  export type SaleItemUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
    create: XOR<SaleItemCreateWithoutProductInput, SaleItemUncheckedCreateWithoutProductInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutProductInput, SaleItemUncheckedUpdateWithoutProductInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutProductInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutProductInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: IntFilter<"SaleItem"> | number
    quantity?: IntFilter<"SaleItem"> | number
    price?: FloatFilter<"SaleItem"> | number
    originalPrice?: FloatFilter<"SaleItem"> | number
    costPrice?: FloatFilter<"SaleItem"> | number
    productId?: IntFilter<"SaleItem"> | number
    saleId?: IntFilter<"SaleItem"> | number
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutProductInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutProductInput, PurchaseItemUncheckedUpdateWithoutProductInput>
    create: XOR<PurchaseItemCreateWithoutProductInput, PurchaseItemUncheckedCreateWithoutProductInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutProductInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutProductInput, PurchaseItemUncheckedUpdateWithoutProductInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutProductInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutProductInput>
  }

  export type PurchaseItemScalarWhereInput = {
    AND?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    OR?: PurchaseItemScalarWhereInput[]
    NOT?: PurchaseItemScalarWhereInput | PurchaseItemScalarWhereInput[]
    id?: IntFilter<"PurchaseItem"> | number
    quantity?: IntFilter<"PurchaseItem"> | number
    costPrice?: FloatFilter<"PurchaseItem"> | number
    productId?: IntFilter<"PurchaseItem"> | number
    purchaseId?: IntFilter<"PurchaseItem"> | number
  }

  export type ReturnInwardItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ReturnInwardItemWhereUniqueInput
    update: XOR<ReturnInwardItemUpdateWithoutProductInput, ReturnInwardItemUncheckedUpdateWithoutProductInput>
    create: XOR<ReturnInwardItemCreateWithoutProductInput, ReturnInwardItemUncheckedCreateWithoutProductInput>
  }

  export type ReturnInwardItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ReturnInwardItemWhereUniqueInput
    data: XOR<ReturnInwardItemUpdateWithoutProductInput, ReturnInwardItemUncheckedUpdateWithoutProductInput>
  }

  export type ReturnInwardItemUpdateManyWithWhereWithoutProductInput = {
    where: ReturnInwardItemScalarWhereInput
    data: XOR<ReturnInwardItemUpdateManyMutationInput, ReturnInwardItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ReturnInwardItemScalarWhereInput = {
    AND?: ReturnInwardItemScalarWhereInput | ReturnInwardItemScalarWhereInput[]
    OR?: ReturnInwardItemScalarWhereInput[]
    NOT?: ReturnInwardItemScalarWhereInput | ReturnInwardItemScalarWhereInput[]
    id?: IntFilter<"ReturnInwardItem"> | number
    quantity?: IntFilter<"ReturnInwardItem"> | number
    price?: FloatFilter<"ReturnInwardItem"> | number
    productId?: IntFilter<"ReturnInwardItem"> | number
    returnInwardId?: IntFilter<"ReturnInwardItem"> | number
  }

  export type ReturnOutwardItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ReturnOutwardItemWhereUniqueInput
    update: XOR<ReturnOutwardItemUpdateWithoutProductInput, ReturnOutwardItemUncheckedUpdateWithoutProductInput>
    create: XOR<ReturnOutwardItemCreateWithoutProductInput, ReturnOutwardItemUncheckedCreateWithoutProductInput>
  }

  export type ReturnOutwardItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ReturnOutwardItemWhereUniqueInput
    data: XOR<ReturnOutwardItemUpdateWithoutProductInput, ReturnOutwardItemUncheckedUpdateWithoutProductInput>
  }

  export type ReturnOutwardItemUpdateManyWithWhereWithoutProductInput = {
    where: ReturnOutwardItemScalarWhereInput
    data: XOR<ReturnOutwardItemUpdateManyMutationInput, ReturnOutwardItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ReturnOutwardItemScalarWhereInput = {
    AND?: ReturnOutwardItemScalarWhereInput | ReturnOutwardItemScalarWhereInput[]
    OR?: ReturnOutwardItemScalarWhereInput[]
    NOT?: ReturnOutwardItemScalarWhereInput | ReturnOutwardItemScalarWhereInput[]
    id?: IntFilter<"ReturnOutwardItem"> | number
    quantity?: IntFilter<"ReturnOutwardItem"> | number
    costPrice?: FloatFilter<"ReturnOutwardItem"> | number
    productId?: IntFilter<"ReturnOutwardItem"> | number
    returnOutwardId?: IntFilter<"ReturnOutwardItem"> | number
  }

  export type StockAdjustmentUpsertWithWhereUniqueWithoutProductInput = {
    where: StockAdjustmentWhereUniqueInput
    update: XOR<StockAdjustmentUpdateWithoutProductInput, StockAdjustmentUncheckedUpdateWithoutProductInput>
    create: XOR<StockAdjustmentCreateWithoutProductInput, StockAdjustmentUncheckedCreateWithoutProductInput>
  }

  export type StockAdjustmentUpdateWithWhereUniqueWithoutProductInput = {
    where: StockAdjustmentWhereUniqueInput
    data: XOR<StockAdjustmentUpdateWithoutProductInput, StockAdjustmentUncheckedUpdateWithoutProductInput>
  }

  export type StockAdjustmentUpdateManyWithWhereWithoutProductInput = {
    where: StockAdjustmentScalarWhereInput
    data: XOR<StockAdjustmentUpdateManyMutationInput, StockAdjustmentUncheckedUpdateManyWithoutProductInput>
  }

  export type StockAdjustmentScalarWhereInput = {
    AND?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
    OR?: StockAdjustmentScalarWhereInput[]
    NOT?: StockAdjustmentScalarWhereInput | StockAdjustmentScalarWhereInput[]
    id?: IntFilter<"StockAdjustment"> | number
    productId?: IntFilter<"StockAdjustment"> | number
    change?: IntFilter<"StockAdjustment"> | number
    reason?: StringFilter<"StockAdjustment"> | string
    createdAt?: DateTimeFilter<"StockAdjustment"> | Date | string
  }

  export type UserCreateWithoutSalesInput = {
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    product: ProductCreateNestedOneWithoutSaleItemsInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: number
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    productId: number
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
  }

  export type ReturnInwardCreateWithoutSaleInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    items?: ReturnInwardItemCreateNestedManyWithoutReturnInwardInput
  }

  export type ReturnInwardUncheckedCreateWithoutSaleInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    items?: ReturnInwardItemUncheckedCreateNestedManyWithoutReturnInwardInput
  }

  export type ReturnInwardCreateOrConnectWithoutSaleInput = {
    where: ReturnInwardWhereUniqueInput
    create: XOR<ReturnInwardCreateWithoutSaleInput, ReturnInwardUncheckedCreateWithoutSaleInput>
  }

  export type ReturnInwardCreateManySaleInputEnvelope = {
    data: ReturnInwardCreateManySaleInput | ReturnInwardCreateManySaleInput[]
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type ReturnInwardUpsertWithWhereUniqueWithoutSaleInput = {
    where: ReturnInwardWhereUniqueInput
    update: XOR<ReturnInwardUpdateWithoutSaleInput, ReturnInwardUncheckedUpdateWithoutSaleInput>
    create: XOR<ReturnInwardCreateWithoutSaleInput, ReturnInwardUncheckedCreateWithoutSaleInput>
  }

  export type ReturnInwardUpdateWithWhereUniqueWithoutSaleInput = {
    where: ReturnInwardWhereUniqueInput
    data: XOR<ReturnInwardUpdateWithoutSaleInput, ReturnInwardUncheckedUpdateWithoutSaleInput>
  }

  export type ReturnInwardUpdateManyWithWhereWithoutSaleInput = {
    where: ReturnInwardScalarWhereInput
    data: XOR<ReturnInwardUpdateManyMutationInput, ReturnInwardUncheckedUpdateManyWithoutSaleInput>
  }

  export type ReturnInwardScalarWhereInput = {
    AND?: ReturnInwardScalarWhereInput | ReturnInwardScalarWhereInput[]
    OR?: ReturnInwardScalarWhereInput[]
    NOT?: ReturnInwardScalarWhereInput | ReturnInwardScalarWhereInput[]
    id?: IntFilter<"ReturnInward"> | number
    reason?: StringFilter<"ReturnInward"> | string
    totalAmount?: FloatFilter<"ReturnInward"> | number
    createdAt?: DateTimeFilter<"ReturnInward"> | Date | string
    saleId?: IntNullableFilter<"ReturnInward"> | number | null
  }

  export type ProductCreateWithoutSaleItemsInput = {
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSaleItemsInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemUncheckedCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemUncheckedCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSaleItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
  }

  export type SaleCreateWithoutItemsInput = {
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    returnInwards?: ReturnInwardCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: number
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    userId: number
    returnInwards?: ReturnInwardUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpsertWithoutSaleItemsInput = {
    update: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
    create: XOR<ProductCreateWithoutSaleItemsInput, ProductUncheckedCreateWithoutSaleItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSaleItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSaleItemsInput, ProductUncheckedUpdateWithoutSaleItemsInput>
  }

  export type ProductUpdateWithoutSaleItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSaleItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUncheckedUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUncheckedUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    returnInwards?: ReturnInwardUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    returnInwards?: ReturnInwardUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SupplierCreateWithoutPurchasesInput = {
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    returnOutwards?: ReturnOutwardCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    returnOutwards?: ReturnOutwardUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutPurchasesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
  }

  export type PurchaseItemCreateWithoutPurchaseInput = {
    quantity: number
    costPrice: number
    product: ProductCreateNestedOneWithoutPurchaseItemsInput
  }

  export type PurchaseItemUncheckedCreateWithoutPurchaseInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
  }

  export type PurchaseItemCreateOrConnectWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemCreateManyPurchaseInputEnvelope = {
    data: PurchaseItemCreateManyPurchaseInput | PurchaseItemCreateManyPurchaseInput[]
  }

  export type ReturnOutwardCreateWithoutPurchaseInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutReturnOutwardsInput
    items?: ReturnOutwardItemCreateNestedManyWithoutReturnOutwardInput
  }

  export type ReturnOutwardUncheckedCreateWithoutPurchaseInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplierId: number
    items?: ReturnOutwardItemUncheckedCreateNestedManyWithoutReturnOutwardInput
  }

  export type ReturnOutwardCreateOrConnectWithoutPurchaseInput = {
    where: ReturnOutwardWhereUniqueInput
    create: XOR<ReturnOutwardCreateWithoutPurchaseInput, ReturnOutwardUncheckedCreateWithoutPurchaseInput>
  }

  export type ReturnOutwardCreateManyPurchaseInputEnvelope = {
    data: ReturnOutwardCreateManyPurchaseInput | ReturnOutwardCreateManyPurchaseInput[]
  }

  export type SupplierPaymentCreateWithoutPurchaseInput = {
    amount: number
    method?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentUncheckedCreateWithoutPurchaseInput = {
    id?: number
    amount: number
    method?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type SupplierPaymentCreateOrConnectWithoutPurchaseInput = {
    where: SupplierPaymentWhereUniqueInput
    create: XOR<SupplierPaymentCreateWithoutPurchaseInput, SupplierPaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type SupplierPaymentCreateManyPurchaseInputEnvelope = {
    data: SupplierPaymentCreateManyPurchaseInput | SupplierPaymentCreateManyPurchaseInput[]
  }

  export type SupplierUpsertWithoutPurchasesInput = {
    update: XOR<SupplierUpdateWithoutPurchasesInput, SupplierUncheckedUpdateWithoutPurchasesInput>
    create: XOR<SupplierCreateWithoutPurchasesInput, SupplierUncheckedCreateWithoutPurchasesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPurchasesInput, SupplierUncheckedUpdateWithoutPurchasesInput>
  }

  export type SupplierUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnOutwards?: ReturnOutwardUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    returnOutwards?: ReturnOutwardUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type PurchaseItemUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    update: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
    create: XOR<PurchaseItemCreateWithoutPurchaseInput, PurchaseItemUncheckedCreateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: PurchaseItemWhereUniqueInput
    data: XOR<PurchaseItemUpdateWithoutPurchaseInput, PurchaseItemUncheckedUpdateWithoutPurchaseInput>
  }

  export type PurchaseItemUpdateManyWithWhereWithoutPurchaseInput = {
    where: PurchaseItemScalarWhereInput
    data: XOR<PurchaseItemUpdateManyMutationInput, PurchaseItemUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type ReturnOutwardUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: ReturnOutwardWhereUniqueInput
    update: XOR<ReturnOutwardUpdateWithoutPurchaseInput, ReturnOutwardUncheckedUpdateWithoutPurchaseInput>
    create: XOR<ReturnOutwardCreateWithoutPurchaseInput, ReturnOutwardUncheckedCreateWithoutPurchaseInput>
  }

  export type ReturnOutwardUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: ReturnOutwardWhereUniqueInput
    data: XOR<ReturnOutwardUpdateWithoutPurchaseInput, ReturnOutwardUncheckedUpdateWithoutPurchaseInput>
  }

  export type ReturnOutwardUpdateManyWithWhereWithoutPurchaseInput = {
    where: ReturnOutwardScalarWhereInput
    data: XOR<ReturnOutwardUpdateManyMutationInput, ReturnOutwardUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type SupplierPaymentUpsertWithWhereUniqueWithoutPurchaseInput = {
    where: SupplierPaymentWhereUniqueInput
    update: XOR<SupplierPaymentUpdateWithoutPurchaseInput, SupplierPaymentUncheckedUpdateWithoutPurchaseInput>
    create: XOR<SupplierPaymentCreateWithoutPurchaseInput, SupplierPaymentUncheckedCreateWithoutPurchaseInput>
  }

  export type SupplierPaymentUpdateWithWhereUniqueWithoutPurchaseInput = {
    where: SupplierPaymentWhereUniqueInput
    data: XOR<SupplierPaymentUpdateWithoutPurchaseInput, SupplierPaymentUncheckedUpdateWithoutPurchaseInput>
  }

  export type SupplierPaymentUpdateManyWithWhereWithoutPurchaseInput = {
    where: SupplierPaymentScalarWhereInput
    data: XOR<SupplierPaymentUpdateManyMutationInput, SupplierPaymentUncheckedUpdateManyWithoutPurchaseInput>
  }

  export type SupplierPaymentScalarWhereInput = {
    AND?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
    OR?: SupplierPaymentScalarWhereInput[]
    NOT?: SupplierPaymentScalarWhereInput | SupplierPaymentScalarWhereInput[]
    id?: IntFilter<"SupplierPayment"> | number
    amount?: FloatFilter<"SupplierPayment"> | number
    method?: StringFilter<"SupplierPayment"> | string
    notes?: StringNullableFilter<"SupplierPayment"> | string | null
    createdAt?: DateTimeFilter<"SupplierPayment"> | Date | string
    purchaseId?: IntFilter<"SupplierPayment"> | number
  }

  export type PurchaseCreateWithoutPaymentsInput = {
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPurchasesInput
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    returnOutwards?: ReturnOutwardCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutPaymentsInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplierId: number
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    returnOutwards?: ReturnOutwardUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutPaymentsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
  }

  export type PurchaseUpsertWithoutPaymentsInput = {
    update: XOR<PurchaseUpdateWithoutPaymentsInput, PurchaseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<PurchaseCreateWithoutPaymentsInput, PurchaseUncheckedCreateWithoutPaymentsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutPaymentsInput, PurchaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type PurchaseUpdateWithoutPaymentsInput = {
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchasesNestedInput
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    returnOutwards?: ReturnOutwardUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    returnOutwards?: ReturnOutwardUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type ProductCreateWithoutPurchaseItemsInput = {
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPurchaseItemsInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemUncheckedCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemUncheckedCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPurchaseItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
  }

  export type PurchaseCreateWithoutItemsInput = {
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPurchasesInput
    returnOutwards?: ReturnOutwardCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutItemsInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplierId: number
    returnOutwards?: ReturnOutwardUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutItemsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpsertWithoutPurchaseItemsInput = {
    update: XOR<ProductUpdateWithoutPurchaseItemsInput, ProductUncheckedUpdateWithoutPurchaseItemsInput>
    create: XOR<ProductCreateWithoutPurchaseItemsInput, ProductUncheckedCreateWithoutPurchaseItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPurchaseItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPurchaseItemsInput, ProductUncheckedUpdateWithoutPurchaseItemsInput>
  }

  export type ProductUpdateWithoutPurchaseItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPurchaseItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUncheckedUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUncheckedUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PurchaseUpsertWithoutItemsInput = {
    update: XOR<PurchaseUpdateWithoutItemsInput, PurchaseUncheckedUpdateWithoutItemsInput>
    create: XOR<PurchaseCreateWithoutItemsInput, PurchaseUncheckedCreateWithoutItemsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutItemsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutItemsInput, PurchaseUncheckedUpdateWithoutItemsInput>
  }

  export type PurchaseUpdateWithoutItemsInput = {
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchasesNestedInput
    returnOutwards?: ReturnOutwardUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    returnOutwards?: ReturnOutwardUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type SaleCreateWithoutReturnInwardsInput = {
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutReturnInwardsInput = {
    id?: number
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
    userId: number
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutReturnInwardsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutReturnInwardsInput, SaleUncheckedCreateWithoutReturnInwardsInput>
  }

  export type ReturnInwardItemCreateWithoutReturnInwardInput = {
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutReturnInItemsInput
  }

  export type ReturnInwardItemUncheckedCreateWithoutReturnInwardInput = {
    id?: number
    quantity: number
    price: number
    productId: number
  }

  export type ReturnInwardItemCreateOrConnectWithoutReturnInwardInput = {
    where: ReturnInwardItemWhereUniqueInput
    create: XOR<ReturnInwardItemCreateWithoutReturnInwardInput, ReturnInwardItemUncheckedCreateWithoutReturnInwardInput>
  }

  export type ReturnInwardItemCreateManyReturnInwardInputEnvelope = {
    data: ReturnInwardItemCreateManyReturnInwardInput | ReturnInwardItemCreateManyReturnInwardInput[]
  }

  export type SaleUpsertWithoutReturnInwardsInput = {
    update: XOR<SaleUpdateWithoutReturnInwardsInput, SaleUncheckedUpdateWithoutReturnInwardsInput>
    create: XOR<SaleCreateWithoutReturnInwardsInput, SaleUncheckedCreateWithoutReturnInwardsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutReturnInwardsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutReturnInwardsInput, SaleUncheckedUpdateWithoutReturnInwardsInput>
  }

  export type SaleUpdateWithoutReturnInwardsInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutReturnInwardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type ReturnInwardItemUpsertWithWhereUniqueWithoutReturnInwardInput = {
    where: ReturnInwardItemWhereUniqueInput
    update: XOR<ReturnInwardItemUpdateWithoutReturnInwardInput, ReturnInwardItemUncheckedUpdateWithoutReturnInwardInput>
    create: XOR<ReturnInwardItemCreateWithoutReturnInwardInput, ReturnInwardItemUncheckedCreateWithoutReturnInwardInput>
  }

  export type ReturnInwardItemUpdateWithWhereUniqueWithoutReturnInwardInput = {
    where: ReturnInwardItemWhereUniqueInput
    data: XOR<ReturnInwardItemUpdateWithoutReturnInwardInput, ReturnInwardItemUncheckedUpdateWithoutReturnInwardInput>
  }

  export type ReturnInwardItemUpdateManyWithWhereWithoutReturnInwardInput = {
    where: ReturnInwardItemScalarWhereInput
    data: XOR<ReturnInwardItemUpdateManyMutationInput, ReturnInwardItemUncheckedUpdateManyWithoutReturnInwardInput>
  }

  export type ProductCreateWithoutReturnInItemsInput = {
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReturnInItemsInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemUncheckedCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReturnInItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReturnInItemsInput, ProductUncheckedCreateWithoutReturnInItemsInput>
  }

  export type ReturnInwardCreateWithoutItemsInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    sale?: SaleCreateNestedOneWithoutReturnInwardsInput
  }

  export type ReturnInwardUncheckedCreateWithoutItemsInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    saleId?: number | null
  }

  export type ReturnInwardCreateOrConnectWithoutItemsInput = {
    where: ReturnInwardWhereUniqueInput
    create: XOR<ReturnInwardCreateWithoutItemsInput, ReturnInwardUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpsertWithoutReturnInItemsInput = {
    update: XOR<ProductUpdateWithoutReturnInItemsInput, ProductUncheckedUpdateWithoutReturnInItemsInput>
    create: XOR<ProductCreateWithoutReturnInItemsInput, ProductUncheckedCreateWithoutReturnInItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReturnInItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReturnInItemsInput, ProductUncheckedUpdateWithoutReturnInItemsInput>
  }

  export type ProductUpdateWithoutReturnInItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReturnInItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUncheckedUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ReturnInwardUpsertWithoutItemsInput = {
    update: XOR<ReturnInwardUpdateWithoutItemsInput, ReturnInwardUncheckedUpdateWithoutItemsInput>
    create: XOR<ReturnInwardCreateWithoutItemsInput, ReturnInwardUncheckedCreateWithoutItemsInput>
    where?: ReturnInwardWhereInput
  }

  export type ReturnInwardUpdateToOneWithWhereWithoutItemsInput = {
    where?: ReturnInwardWhereInput
    data: XOR<ReturnInwardUpdateWithoutItemsInput, ReturnInwardUncheckedUpdateWithoutItemsInput>
  }

  export type ReturnInwardUpdateWithoutItemsInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneWithoutReturnInwardsNestedInput
  }

  export type ReturnInwardUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SupplierCreateWithoutReturnOutwardsInput = {
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutReturnOutwardsInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutReturnOutwardsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutReturnOutwardsInput, SupplierUncheckedCreateWithoutReturnOutwardsInput>
  }

  export type PurchaseCreateWithoutReturnOutwardsInput = {
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutPurchasesInput
    items?: PurchaseItemCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseUncheckedCreateWithoutReturnOutwardsInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
    supplierId: number
    items?: PurchaseItemUncheckedCreateNestedManyWithoutPurchaseInput
    payments?: SupplierPaymentUncheckedCreateNestedManyWithoutPurchaseInput
  }

  export type PurchaseCreateOrConnectWithoutReturnOutwardsInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutReturnOutwardsInput, PurchaseUncheckedCreateWithoutReturnOutwardsInput>
  }

  export type ReturnOutwardItemCreateWithoutReturnOutwardInput = {
    quantity: number
    costPrice: number
    product: ProductCreateNestedOneWithoutReturnOutItemsInput
  }

  export type ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
  }

  export type ReturnOutwardItemCreateOrConnectWithoutReturnOutwardInput = {
    where: ReturnOutwardItemWhereUniqueInput
    create: XOR<ReturnOutwardItemCreateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput>
  }

  export type ReturnOutwardItemCreateManyReturnOutwardInputEnvelope = {
    data: ReturnOutwardItemCreateManyReturnOutwardInput | ReturnOutwardItemCreateManyReturnOutwardInput[]
  }

  export type SupplierUpsertWithoutReturnOutwardsInput = {
    update: XOR<SupplierUpdateWithoutReturnOutwardsInput, SupplierUncheckedUpdateWithoutReturnOutwardsInput>
    create: XOR<SupplierCreateWithoutReturnOutwardsInput, SupplierUncheckedCreateWithoutReturnOutwardsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutReturnOutwardsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutReturnOutwardsInput, SupplierUncheckedUpdateWithoutReturnOutwardsInput>
  }

  export type SupplierUpdateWithoutReturnOutwardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutReturnOutwardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type PurchaseUpsertWithoutReturnOutwardsInput = {
    update: XOR<PurchaseUpdateWithoutReturnOutwardsInput, PurchaseUncheckedUpdateWithoutReturnOutwardsInput>
    create: XOR<PurchaseCreateWithoutReturnOutwardsInput, PurchaseUncheckedCreateWithoutReturnOutwardsInput>
    where?: PurchaseWhereInput
  }

  export type PurchaseUpdateToOneWithWhereWithoutReturnOutwardsInput = {
    where?: PurchaseWhereInput
    data: XOR<PurchaseUpdateWithoutReturnOutwardsInput, PurchaseUncheckedUpdateWithoutReturnOutwardsInput>
  }

  export type PurchaseUpdateWithoutReturnOutwardsInput = {
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchasesNestedInput
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutReturnOutwardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type ReturnOutwardItemUpsertWithWhereUniqueWithoutReturnOutwardInput = {
    where: ReturnOutwardItemWhereUniqueInput
    update: XOR<ReturnOutwardItemUpdateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedUpdateWithoutReturnOutwardInput>
    create: XOR<ReturnOutwardItemCreateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedCreateWithoutReturnOutwardInput>
  }

  export type ReturnOutwardItemUpdateWithWhereUniqueWithoutReturnOutwardInput = {
    where: ReturnOutwardItemWhereUniqueInput
    data: XOR<ReturnOutwardItemUpdateWithoutReturnOutwardInput, ReturnOutwardItemUncheckedUpdateWithoutReturnOutwardInput>
  }

  export type ReturnOutwardItemUpdateManyWithWhereWithoutReturnOutwardInput = {
    where: ReturnOutwardItemScalarWhereInput
    data: XOR<ReturnOutwardItemUpdateManyMutationInput, ReturnOutwardItemUncheckedUpdateManyWithoutReturnOutwardInput>
  }

  export type ProductCreateWithoutReturnOutItemsInput = {
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReturnOutItemsInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemUncheckedCreateNestedManyWithoutProductInput
    stockAdjustments?: StockAdjustmentUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReturnOutItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReturnOutItemsInput, ProductUncheckedCreateWithoutReturnOutItemsInput>
  }

  export type ReturnOutwardCreateWithoutItemsInput = {
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutReturnOutwardsInput
    purchase?: PurchaseCreateNestedOneWithoutReturnOutwardsInput
  }

  export type ReturnOutwardUncheckedCreateWithoutItemsInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplierId: number
    purchaseId?: number | null
  }

  export type ReturnOutwardCreateOrConnectWithoutItemsInput = {
    where: ReturnOutwardWhereUniqueInput
    create: XOR<ReturnOutwardCreateWithoutItemsInput, ReturnOutwardUncheckedCreateWithoutItemsInput>
  }

  export type ProductUpsertWithoutReturnOutItemsInput = {
    update: XOR<ProductUpdateWithoutReturnOutItemsInput, ProductUncheckedUpdateWithoutReturnOutItemsInput>
    create: XOR<ProductCreateWithoutReturnOutItemsInput, ProductUncheckedCreateWithoutReturnOutItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReturnOutItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReturnOutItemsInput, ProductUncheckedUpdateWithoutReturnOutItemsInput>
  }

  export type ProductUpdateWithoutReturnOutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReturnOutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUncheckedUpdateManyWithoutProductNestedInput
    stockAdjustments?: StockAdjustmentUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ReturnOutwardUpsertWithoutItemsInput = {
    update: XOR<ReturnOutwardUpdateWithoutItemsInput, ReturnOutwardUncheckedUpdateWithoutItemsInput>
    create: XOR<ReturnOutwardCreateWithoutItemsInput, ReturnOutwardUncheckedCreateWithoutItemsInput>
    where?: ReturnOutwardWhereInput
  }

  export type ReturnOutwardUpdateToOneWithWhereWithoutItemsInput = {
    where?: ReturnOutwardWhereInput
    data: XOR<ReturnOutwardUpdateWithoutItemsInput, ReturnOutwardUncheckedUpdateWithoutItemsInput>
  }

  export type ReturnOutwardUpdateWithoutItemsInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutReturnOutwardsNestedInput
    purchase?: PurchaseUpdateOneWithoutReturnOutwardsNestedInput
  }

  export type ReturnOutwardUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateWithoutStockAdjustmentsInput = {
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockAdjustmentsInput = {
    id?: number
    name: string
    barcode?: string
    price: number
    costPrice?: number
    stock?: number
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    saleItems?: SaleItemUncheckedCreateNestedManyWithoutProductInput
    purchaseItems?: PurchaseItemUncheckedCreateNestedManyWithoutProductInput
    returnInItems?: ReturnInwardItemUncheckedCreateNestedManyWithoutProductInput
    returnOutItems?: ReturnOutwardItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockAdjustmentsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
  }

  export type ProductUpsertWithoutStockAdjustmentsInput = {
    update: XOR<ProductUpdateWithoutStockAdjustmentsInput, ProductUncheckedUpdateWithoutStockAdjustmentsInput>
    create: XOR<ProductCreateWithoutStockAdjustmentsInput, ProductUncheckedCreateWithoutStockAdjustmentsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockAdjustmentsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockAdjustmentsInput, ProductUncheckedUpdateWithoutStockAdjustmentsInput>
  }

  export type ProductUpdateWithoutStockAdjustmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockAdjustmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItems?: SaleItemUncheckedUpdateManyWithoutProductNestedInput
    purchaseItems?: PurchaseItemUncheckedUpdateManyWithoutProductNestedInput
    returnInItems?: ReturnInwardItemUncheckedUpdateManyWithoutProductNestedInput
    returnOutItems?: ReturnOutwardItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SaleCreateManyUserInput = {
    id?: number
    total: number
    paymentMethod?: string
    cashAmount?: number
    mpesaAmount?: number
    status?: string
    voidReason?: string | null
    voidedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutUserInput = {
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    returnInwards?: ReturnInwardUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    returnInwards?: ReturnInwardUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    cashAmount?: FloatFieldUpdateOperationsInput | number
    mpesaAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    voidReason?: NullableStringFieldUpdateOperationsInput | string | null
    voidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManySupplierInput = {
    id?: number
    referenceNo?: string | null
    totalAmount: number
    carriageInwards?: number
    amountPaid?: number
    paymentStatus?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ReturnOutwardCreateManySupplierInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    purchaseId?: number | null
  }

  export type PurchaseUpdateWithoutSupplierInput = {
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUpdateManyWithoutPurchaseNestedInput
    returnOutwards?: ReturnOutwardUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PurchaseItemUncheckedUpdateManyWithoutPurchaseNestedInput
    returnOutwards?: ReturnOutwardUncheckedUpdateManyWithoutPurchaseNestedInput
    payments?: SupplierPaymentUncheckedUpdateManyWithoutPurchaseNestedInput
  }

  export type PurchaseUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    totalAmount?: FloatFieldUpdateOperationsInput | number
    carriageInwards?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnOutwardUpdateWithoutSupplierInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchase?: PurchaseUpdateOneWithoutReturnOutwardsNestedInput
    items?: ReturnOutwardItemUpdateManyWithoutReturnOutwardNestedInput
  }

  export type ReturnOutwardUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ReturnOutwardItemUncheckedUpdateManyWithoutReturnOutwardNestedInput
  }

  export type ReturnOutwardUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaleItemCreateManyProductInput = {
    id?: number
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    saleId: number
  }

  export type PurchaseItemCreateManyProductInput = {
    id?: number
    quantity: number
    costPrice: number
    purchaseId: number
  }

  export type ReturnInwardItemCreateManyProductInput = {
    id?: number
    quantity: number
    price: number
    returnInwardId: number
  }

  export type ReturnOutwardItemCreateManyProductInput = {
    id?: number
    quantity: number
    costPrice: number
    returnOutwardId: number
  }

  export type StockAdjustmentCreateManyProductInput = {
    id?: number
    change: number
    reason: string
    createdAt?: Date | string
  }

  export type SaleItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    saleId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    purchase?: PurchaseUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    purchaseId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnInwardItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    returnInward?: ReturnInwardUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReturnInwardItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    returnInwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnInwardItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    returnInwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    returnOutward?: ReturnOutwardUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReturnOutwardItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    returnOutwardId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    returnOutwardId?: IntFieldUpdateOperationsInput | number
  }

  export type StockAdjustmentUpdateWithoutProductInput = {
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockAdjustmentUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    change?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: number
    quantity: number
    price: number
    originalPrice?: number
    costPrice?: number
    productId: number
  }

  export type ReturnInwardCreateManySaleInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSaleItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    originalPrice?: FloatFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnInwardUpdateWithoutSaleInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReturnInwardItemUpdateManyWithoutReturnInwardNestedInput
  }

  export type ReturnInwardUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReturnInwardItemUncheckedUpdateManyWithoutReturnInwardNestedInput
  }

  export type ReturnInwardUncheckedUpdateManyWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseItemCreateManyPurchaseInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
  }

  export type ReturnOutwardCreateManyPurchaseInput = {
    id?: number
    reason: string
    totalAmount: number
    createdAt?: Date | string
    supplierId: number
  }

  export type SupplierPaymentCreateManyPurchaseInput = {
    id?: number
    amount: number
    method?: string
    notes?: string | null
    createdAt?: Date | string
  }

  export type PurchaseItemUpdateWithoutPurchaseInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutPurchaseItemsNestedInput
  }

  export type PurchaseItemUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseItemUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardUpdateWithoutPurchaseInput = {
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutReturnOutwardsNestedInput
    items?: ReturnOutwardItemUpdateManyWithoutReturnOutwardNestedInput
  }

  export type ReturnOutwardUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
    items?: ReturnOutwardItemUncheckedUpdateManyWithoutReturnOutwardNestedInput
  }

  export type ReturnOutwardUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplierPaymentUpdateWithoutPurchaseInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierPaymentUncheckedUpdateManyWithoutPurchaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReturnInwardItemCreateManyReturnInwardInput = {
    id?: number
    quantity: number
    price: number
    productId: number
  }

  export type ReturnInwardItemUpdateWithoutReturnInwardInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReturnInItemsNestedInput
  }

  export type ReturnInwardItemUncheckedUpdateWithoutReturnInwardInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnInwardItemUncheckedUpdateManyWithoutReturnInwardInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardItemCreateManyReturnOutwardInput = {
    id?: number
    quantity: number
    costPrice: number
    productId: number
  }

  export type ReturnOutwardItemUpdateWithoutReturnOutwardInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutReturnOutItemsNestedInput
  }

  export type ReturnOutwardItemUncheckedUpdateWithoutReturnOutwardInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ReturnOutwardItemUncheckedUpdateManyWithoutReturnOutwardInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    costPrice?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierCountOutputTypeDefaultArgs instead
     */
    export type SupplierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleCountOutputTypeDefaultArgs instead
     */
    export type SaleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseCountOutputTypeDefaultArgs instead
     */
    export type PurchaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReturnInwardCountOutputTypeDefaultArgs instead
     */
    export type ReturnInwardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReturnInwardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReturnOutwardCountOutputTypeDefaultArgs instead
     */
    export type ReturnOutwardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReturnOutwardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierDefaultArgs instead
     */
    export type SupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleDefaultArgs instead
     */
    export type SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SaleItemDefaultArgs instead
     */
    export type SaleItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SaleItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseDefaultArgs instead
     */
    export type PurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierPaymentDefaultArgs instead
     */
    export type SupplierPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierPaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PurchaseItemDefaultArgs instead
     */
    export type PurchaseItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PurchaseItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReturnInwardDefaultArgs instead
     */
    export type ReturnInwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReturnInwardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReturnInwardItemDefaultArgs instead
     */
    export type ReturnInwardItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReturnInwardItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReturnOutwardDefaultArgs instead
     */
    export type ReturnOutwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReturnOutwardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReturnOutwardItemDefaultArgs instead
     */
    export type ReturnOutwardItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReturnOutwardItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpenseDefaultArgs instead
     */
    export type ExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockAdjustmentDefaultArgs instead
     */
    export type StockAdjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockAdjustmentDefaultArgs<ExtArgs>

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