
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    boards: BoardPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    email: string
    password: string
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type BoardPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Board"
  objects: {
    user: UserPayload<ExtArgs>
    columns: ColumnPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    userId: string
  }, ExtArgs["result"]["board"]>
  composites: {}
}

/**
 * Model Board
 * 
 */
export type Board = runtime.Types.DefaultSelection<BoardPayload>
export type ColumnPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Column"
  objects: {
    board: BoardPayload<ExtArgs>
    tasks: TaskPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    name: string
    boardId: string
  }, ExtArgs["result"]["column"]>
  composites: {}
}

/**
 * Model Column
 * 
 */
export type Column = runtime.Types.DefaultSelection<ColumnPayload>
export type TaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Task"
  objects: {
    column: ColumnPayload<ExtArgs>
    subtasks: SubtaskPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    title: string
    description: string
    status: string
    columnId: string
  }, ExtArgs["result"]["task"]>
  composites: {}
}

/**
 * Model Task
 * 
 */
export type Task = runtime.Types.DefaultSelection<TaskPayload>
export type SubtaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Subtask"
  objects: {
    task: TaskPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    title: string
    isCompleted: boolean
    taskId: string
  }, ExtArgs["result"]["subtask"]>
  composites: {}
}

/**
 * Model Subtask
 * 
 */
export type Subtask = runtime.Types.DefaultSelection<SubtaskPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.column.findMany()
    * ```
    */
  get column(): Prisma.ColumnDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.subtask`: Exposes CRUD operations for the **Subtask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subtasks
    * const subtasks = await prisma.subtask.findMany()
    * ```
    */
  get subtask(): Prisma.SubtaskDelegate<GlobalReject, ExtArgs>;
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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Board: 'Board',
    Column: 'Column',
    Task: 'Task',
    Subtask: 'Subtask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'board' | 'column' | 'task' | 'subtask'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: BoardPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>,
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Column: {
        payload: ColumnPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>
          }
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>
          }
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>[]
          }
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>
          }
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>
          }
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>
          }
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ColumnPayload>
          }
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateColumn>
          }
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>,
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: TaskPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Subtask: {
        payload: SubtaskPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SubtaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubtaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>
          }
          findFirst: {
            args: Prisma.SubtaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubtaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>
          }
          findMany: {
            args: Prisma.SubtaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>[]
          }
          create: {
            args: Prisma.SubtaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>
          }
          createMany: {
            args: Prisma.SubtaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubtaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>
          }
          update: {
            args: Prisma.SubtaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>
          }
          deleteMany: {
            args: Prisma.SubtaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubtaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubtaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SubtaskPayload>
          }
          aggregate: {
            args: Prisma.SubtaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubtask>
          }
          groupBy: {
            args: Prisma.SubtaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubtaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubtaskCountArgs<ExtArgs>,
            result: $Utils.Optional<SubtaskCountAggregateOutputType> | number
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
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
    boards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    boards?: boolean | UserCountOutputTypeCountBoardsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }



  /**
   * Count Type BoardCountOutputType
   */


  export type BoardCountOutputType = {
    columns: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    columns?: boolean | BoardCountOutputTypeCountColumnsArgs
  }

  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
  }



  /**
   * Count Type ColumnCountOutputType
   */


  export type ColumnCountOutputType = {
    tasks: number
  }

  export type ColumnCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tasks?: boolean | ColumnCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnCountOutputType
     */
    select?: ColumnCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }



  /**
   * Count Type TaskCountOutputType
   */


  export type TaskCountOutputType = {
    subtasks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs
  }

  // Custom InputTypes

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubtaskWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    boards?: boolean | User$boardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    boards?: boolean | User$boardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    boards<T extends User$boardsArgs<ExtArgs> = {}>(args?: Subset<T, User$boardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.boards
   */
  export type User$boardsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Board
   */


  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type BoardMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: Enumerable<BoardOrderByWithAggregationInput>
    by: BoardScalarFieldEnum[]
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }


  export type BoardGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserArgs<ExtArgs>
    columns?: boolean | Board$columnsArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type BoardInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    columns?: boolean | Board$columnsArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeArgs<ExtArgs>
  }


  type BoardGetPayload<S extends boolean | null | undefined | BoardArgs> = $Types.GetResult<BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Board'> extends True ? Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Board that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Board'> extends True ? Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Board that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardCreateArgs<ExtArgs>>
    ): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Boards.
     *     @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     *     @example
     *     // Create many Boards
     *     const board = await prisma.board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>
    ): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>
    ): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>
    ): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    columns<T extends Board$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Board$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Board base type for findUnique actions
   */
  export type BoardFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUnique
   */
  export interface BoardFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BoardFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board base type for findFirst actions
   */
  export type BoardFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: Enumerable<BoardScalarFieldEnum>
  }

  /**
   * Board findFirst
   */
  export interface BoardFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BoardFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }


  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: Enumerable<BoardCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
  }


  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }


  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }


  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }


  /**
   * Board.columns
   */
  export type Board$columnsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    where?: ColumnWhereInput
    orderBy?: Enumerable<ColumnOrderByWithRelationInput>
    cursor?: ColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ColumnScalarFieldEnum>
  }


  /**
   * Board without action
   */
  export type BoardArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoardInclude<ExtArgs> | null
  }



  /**
   * Model Column
   */


  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  export type ColumnMinAggregateOutputType = {
    id: string | null
    name: string | null
    boardId: string | null
  }

  export type ColumnMaxAggregateOutputType = {
    id: string | null
    name: string | null
    boardId: string | null
  }

  export type ColumnCountAggregateOutputType = {
    id: number
    name: number
    boardId: number
    _all: number
  }


  export type ColumnMinAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
  }

  export type ColumnMaxAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
  }

  export type ColumnCountAggregateInputType = {
    id?: true
    name?: true
    boardId?: true
    _all?: true
  }

  export type ColumnAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: Enumerable<ColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMaxAggregateInputType
  }

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>
  }




  export type ColumnGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
    orderBy?: Enumerable<ColumnOrderByWithAggregationInput>
    by: ColumnScalarFieldEnum[]
    having?: ColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnCountAggregateInputType | true
    _min?: ColumnMinAggregateInputType
    _max?: ColumnMaxAggregateInputType
  }


  export type ColumnGroupByOutputType = {
    id: string
    name: string
    boardId: string
    _count: ColumnCountAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>
        }
      >
    >


  export type ColumnSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    boardId?: boolean
    board?: boolean | BoardArgs<ExtArgs>
    tasks?: boolean | Column$tasksArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectScalar = {
    id?: boolean
    name?: boolean
    boardId?: boolean
  }

  export type ColumnInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    board?: boolean | BoardArgs<ExtArgs>
    tasks?: boolean | Column$tasksArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeArgs<ExtArgs>
  }


  type ColumnGetPayload<S extends boolean | null | undefined | ColumnArgs> = $Types.GetResult<ColumnPayload, S>

  type ColumnCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ColumnFindManyArgs, 'select' | 'include'> & {
      select?: ColumnCountAggregateInputType | true
    }

  export interface ColumnDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column'], meta: { name: 'Column' } }
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ColumnFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Column'> extends True ? Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Column that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ColumnFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Column'> extends True ? Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Column that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ColumnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     * 
    **/
    create<T extends ColumnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>
    ): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Columns.
     *     @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     *     @example
     *     // Create many Columns
     *     const column = await prisma.column.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ColumnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     * 
    **/
    delete<T extends ColumnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>
    ): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ColumnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>
    ): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ColumnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ColumnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
    **/
    upsert<T extends ColumnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>
    ): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColumnAggregateArgs>(args: Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
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
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ColumnClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    board<T extends BoardArgs<ExtArgs> = {}>(args?: Subset<T, BoardArgs<ExtArgs>>): Prisma__BoardClient<$Types.GetResult<BoardPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    tasks<T extends Column$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Column$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Column base type for findUnique actions
   */
  export type ColumnFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findUnique
   */
  export interface ColumnFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ColumnFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }


  /**
   * Column base type for findFirst actions
   */
  export type ColumnFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: Enumerable<ColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: Enumerable<ColumnScalarFieldEnum>
  }

  /**
   * Column findFirst
   */
  export interface ColumnFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ColumnFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: Enumerable<ColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: Enumerable<ColumnScalarFieldEnum>
  }


  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: Enumerable<ColumnOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    distinct?: Enumerable<ColumnScalarFieldEnum>
  }


  /**
   * Column create
   */
  export type ColumnCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
  }


  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: Enumerable<ColumnCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Column update
   */
  export type ColumnUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput
  }


  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
  }


  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
  }


  /**
   * Column delete
   */
  export type ColumnDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput
  }


  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput
  }


  /**
   * Column.tasks
   */
  export type Column$tasksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Column without action
   */
  export type ColumnArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColumnInclude<ExtArgs> | null
  }



  /**
   * Model Task
   */


  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    columnId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    columnId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    columnId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    columnId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    columnId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    columnId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: Enumerable<TaskOrderByWithAggregationInput>
    by: TaskScalarFieldEnum[]
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }


  export type TaskGroupByOutputType = {
    id: string
    title: string
    description: string
    status: string
    columnId: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    columnId?: boolean
    column?: boolean | ColumnArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    columnId?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeArgs<ExtArgs>
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskArgs> = $Types.GetResult<TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Task'> extends True ? Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Task'> extends True ? Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    column<T extends ColumnArgs<ExtArgs> = {}>(args?: Subset<T, ColumnArgs<ExtArgs>>): Prisma__ColumnClient<$Types.GetResult<ColumnPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Task base type for findUnique actions
   */
  export type TaskFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUnique
   */
  export interface TaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TaskFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task base type for findFirst actions
   */
  export type TaskFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: Enumerable<TaskScalarFieldEnum>
  }

  /**
   * Task findFirst
   */
  export interface TaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TaskFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: Enumerable<TaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: Enumerable<TaskScalarFieldEnum>
  }


  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: Enumerable<TaskCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }


  /**
   * Task.subtasks
   */
  export type Task$subtasksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    where?: SubtaskWhereInput
    orderBy?: Enumerable<SubtaskOrderByWithRelationInput>
    cursor?: SubtaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SubtaskScalarFieldEnum>
  }


  /**
   * Task without action
   */
  export type TaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
  }



  /**
   * Model Subtask
   */


  export type AggregateSubtask = {
    _count: SubtaskCountAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  export type SubtaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    isCompleted: boolean | null
    taskId: string | null
  }

  export type SubtaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isCompleted: boolean | null
    taskId: string | null
  }

  export type SubtaskCountAggregateOutputType = {
    id: number
    title: number
    isCompleted: number
    taskId: number
    _all: number
  }


  export type SubtaskMinAggregateInputType = {
    id?: true
    title?: true
    isCompleted?: true
    taskId?: true
  }

  export type SubtaskMaxAggregateInputType = {
    id?: true
    title?: true
    isCompleted?: true
    taskId?: true
  }

  export type SubtaskCountAggregateInputType = {
    id?: true
    title?: true
    isCompleted?: true
    taskId?: true
    _all?: true
  }

  export type SubtaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtask to aggregate.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: Enumerable<SubtaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subtasks
    **/
    _count?: true | SubtaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubtaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubtaskMaxAggregateInputType
  }

  export type GetSubtaskAggregateType<T extends SubtaskAggregateArgs> = {
        [P in keyof T & keyof AggregateSubtask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubtask[P]>
      : GetScalarType<T[P], AggregateSubtask[P]>
  }




  export type SubtaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SubtaskWhereInput
    orderBy?: Enumerable<SubtaskOrderByWithAggregationInput>
    by: SubtaskScalarFieldEnum[]
    having?: SubtaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubtaskCountAggregateInputType | true
    _min?: SubtaskMinAggregateInputType
    _max?: SubtaskMaxAggregateInputType
  }


  export type SubtaskGroupByOutputType = {
    id: string
    title: string
    isCompleted: boolean
    taskId: string
    _count: SubtaskCountAggregateOutputType | null
    _min: SubtaskMinAggregateOutputType | null
    _max: SubtaskMaxAggregateOutputType | null
  }

  type GetSubtaskGroupByPayload<T extends SubtaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SubtaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubtaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
            : GetScalarType<T[P], SubtaskGroupByOutputType[P]>
        }
      >
    >


  export type SubtaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isCompleted?: boolean
    taskId?: boolean
    task?: boolean | TaskArgs<ExtArgs>
  }, ExtArgs["result"]["subtask"]>

  export type SubtaskSelectScalar = {
    id?: boolean
    title?: boolean
    isCompleted?: boolean
    taskId?: boolean
  }

  export type SubtaskInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    task?: boolean | TaskArgs<ExtArgs>
  }


  type SubtaskGetPayload<S extends boolean | null | undefined | SubtaskArgs> = $Types.GetResult<SubtaskPayload, S>

  type SubtaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SubtaskFindManyArgs, 'select' | 'include'> & {
      select?: SubtaskCountAggregateInputType | true
    }

  export interface SubtaskDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subtask'], meta: { name: 'Subtask' } }
    /**
     * Find zero or one Subtask that matches the filter.
     * @param {SubtaskFindUniqueArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubtaskFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubtaskFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Subtask'> extends True ? Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Subtask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SubtaskFindUniqueOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubtaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Subtask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindFirstArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubtaskFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubtaskFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Subtask'> extends True ? Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Subtask that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindFirstOrThrowArgs} args - Arguments to find a Subtask
     * @example
     * // Get one Subtask
     * const subtask = await prisma.subtask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubtaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Subtasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subtasks
     * const subtasks = await prisma.subtask.findMany()
     * 
     * // Get first 10 Subtasks
     * const subtasks = await prisma.subtask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subtaskWithIdOnly = await prisma.subtask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubtaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Subtask.
     * @param {SubtaskCreateArgs} args - Arguments to create a Subtask.
     * @example
     * // Create one Subtask
     * const Subtask = await prisma.subtask.create({
     *   data: {
     *     // ... data to create a Subtask
     *   }
     * })
     * 
    **/
    create<T extends SubtaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskCreateArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Subtasks.
     *     @param {SubtaskCreateManyArgs} args - Arguments to create many Subtasks.
     *     @example
     *     // Create many Subtasks
     *     const subtask = await prisma.subtask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubtaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subtask.
     * @param {SubtaskDeleteArgs} args - Arguments to delete one Subtask.
     * @example
     * // Delete one Subtask
     * const Subtask = await prisma.subtask.delete({
     *   where: {
     *     // ... filter to delete one Subtask
     *   }
     * })
     * 
    **/
    delete<T extends SubtaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskDeleteArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Subtask.
     * @param {SubtaskUpdateArgs} args - Arguments to update one Subtask.
     * @example
     * // Update one Subtask
     * const subtask = await prisma.subtask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubtaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskUpdateArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Subtasks.
     * @param {SubtaskDeleteManyArgs} args - Arguments to filter Subtasks to delete.
     * @example
     * // Delete a few Subtasks
     * const { count } = await prisma.subtask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubtaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubtaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subtasks
     * const subtask = await prisma.subtask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubtaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subtask.
     * @param {SubtaskUpsertArgs} args - Arguments to update or create a Subtask.
     * @example
     * // Update or create a Subtask
     * const subtask = await prisma.subtask.upsert({
     *   create: {
     *     // ... data to create a Subtask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subtask we want to update
     *   }
     * })
    **/
    upsert<T extends SubtaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubtaskUpsertArgs<ExtArgs>>
    ): Prisma__SubtaskClient<$Types.GetResult<SubtaskPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Subtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskCountArgs} args - Arguments to filter Subtasks to count.
     * @example
     * // Count the number of Subtasks
     * const count = await prisma.subtask.count({
     *   where: {
     *     // ... the filter for the Subtasks we want to count
     *   }
     * })
    **/
    count<T extends SubtaskCountArgs>(
      args?: Subset<T, SubtaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubtaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubtaskAggregateArgs>(args: Subset<T, SubtaskAggregateArgs>): Prisma.PrismaPromise<GetSubtaskAggregateType<T>>

    /**
     * Group by Subtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubtaskGroupByArgs} args - Group by arguments.
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
      T extends SubtaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubtaskGroupByArgs['orderBy'] }
        : { orderBy?: SubtaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubtaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubtaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Subtask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubtaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    task<T extends TaskArgs<ExtArgs> = {}>(args?: Subset<T, TaskArgs<ExtArgs>>): Prisma__TaskClient<$Types.GetResult<TaskPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Subtask base type for findUnique actions
   */
  export type SubtaskFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where: SubtaskWhereUniqueInput
  }

  /**
   * Subtask findUnique
   */
  export interface SubtaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SubtaskFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subtask findUniqueOrThrow
   */
  export type SubtaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where: SubtaskWhereUniqueInput
  }


  /**
   * Subtask base type for findFirst actions
   */
  export type SubtaskFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: Enumerable<SubtaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtasks.
     */
    distinct?: Enumerable<SubtaskScalarFieldEnum>
  }

  /**
   * Subtask findFirst
   */
  export interface SubtaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SubtaskFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Subtask findFirstOrThrow
   */
  export type SubtaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtask to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: Enumerable<SubtaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subtasks.
     */
    distinct?: Enumerable<SubtaskScalarFieldEnum>
  }


  /**
   * Subtask findMany
   */
  export type SubtaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter, which Subtasks to fetch.
     */
    where?: SubtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subtasks to fetch.
     */
    orderBy?: Enumerable<SubtaskOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subtasks.
     */
    cursor?: SubtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subtasks.
     */
    skip?: number
    distinct?: Enumerable<SubtaskScalarFieldEnum>
  }


  /**
   * Subtask create
   */
  export type SubtaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Subtask.
     */
    data: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>
  }


  /**
   * Subtask createMany
   */
  export type SubtaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subtasks.
     */
    data: Enumerable<SubtaskCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Subtask update
   */
  export type SubtaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Subtask.
     */
    data: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>
    /**
     * Choose, which Subtask to update.
     */
    where: SubtaskWhereUniqueInput
  }


  /**
   * Subtask updateMany
   */
  export type SubtaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subtasks.
     */
    data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyInput>
    /**
     * Filter which Subtasks to update
     */
    where?: SubtaskWhereInput
  }


  /**
   * Subtask upsert
   */
  export type SubtaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Subtask to update in case it exists.
     */
    where: SubtaskWhereUniqueInput
    /**
     * In case the Subtask found by the `where` argument doesn't exist, create a new Subtask with this data.
     */
    create: XOR<SubtaskCreateInput, SubtaskUncheckedCreateInput>
    /**
     * In case the Subtask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubtaskUpdateInput, SubtaskUncheckedUpdateInput>
  }


  /**
   * Subtask delete
   */
  export type SubtaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
    /**
     * Filter which Subtask to delete.
     */
    where: SubtaskWhereUniqueInput
  }


  /**
   * Subtask deleteMany
   */
  export type SubtaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subtasks to delete
     */
    where?: SubtaskWhereInput
  }


  /**
   * Subtask without action
   */
  export type SubtaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subtask
     */
    select?: SubtaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SubtaskInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const ColumnScalarFieldEnum: {
    id: 'id',
    name: 'name',
    boardId: 'boardId'
  };

  export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    columnId: 'columnId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SubtaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isCompleted: 'isCompleted',
    taskId: 'taskId'
  };

  export type SubtaskScalarFieldEnum = (typeof SubtaskScalarFieldEnum)[keyof typeof SubtaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    boards?: BoardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    boards?: BoardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type BoardWhereInput = {
    AND?: Enumerable<BoardWhereInput>
    OR?: Enumerable<BoardWhereInput>
    NOT?: Enumerable<BoardWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    columns?: ColumnListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    columns?: ColumnOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = {
    id?: string
  }

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type ColumnWhereInput = {
    AND?: Enumerable<ColumnWhereInput>
    OR?: Enumerable<ColumnWhereInput>
    NOT?: Enumerable<ColumnWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    boardId?: StringFilter | string
    board?: XOR<BoardRelationFilter, BoardWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    board?: BoardOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ColumnWhereUniqueInput = {
    id?: string
  }

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
    _count?: ColumnCountOrderByAggregateInput
    _max?: ColumnMaxOrderByAggregateInput
    _min?: ColumnMinOrderByAggregateInput
  }

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ColumnScalarWhereWithAggregatesInput>
    OR?: Enumerable<ColumnScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ColumnScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    boardId?: StringWithAggregatesFilter | string
  }

  export type TaskWhereInput = {
    AND?: Enumerable<TaskWhereInput>
    OR?: Enumerable<TaskWhereInput>
    NOT?: Enumerable<TaskWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    status?: StringFilter | string
    columnId?: StringFilter | string
    column?: XOR<ColumnRelationFilter, ColumnWhereInput>
    subtasks?: SubtaskListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    columnId?: SortOrder
    column?: ColumnOrderByWithRelationInput
    subtasks?: SubtaskOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = {
    id?: string
  }

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    columnId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TaskScalarWhereWithAggregatesInput>
    OR?: Enumerable<TaskScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TaskScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    columnId?: StringWithAggregatesFilter | string
  }

  export type SubtaskWhereInput = {
    AND?: Enumerable<SubtaskWhereInput>
    OR?: Enumerable<SubtaskWhereInput>
    NOT?: Enumerable<SubtaskWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    isCompleted?: BoolFilter | boolean
    taskId?: StringFilter | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type SubtaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    taskId?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type SubtaskWhereUniqueInput = {
    id?: string
  }

  export type SubtaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    taskId?: SortOrder
    _count?: SubtaskCountOrderByAggregateInput
    _max?: SubtaskMaxOrderByAggregateInput
    _min?: SubtaskMinOrderByAggregateInput
  }

  export type SubtaskScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubtaskScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubtaskScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubtaskScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    isCompleted?: BoolWithAggregatesFilter | boolean
    taskId?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    boards?: BoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    boards?: BoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: BoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    boards?: BoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutBoardsInput
    columns?: ColumnCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
    columns?: ColumnUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnCreateInput = {
    id?: string
    name: string
    board: BoardCreateNestedOneWithoutColumnsInput
    tasks?: TaskCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateInput = {
    id?: string
    name: string
    boardId: string
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput
    tasks?: TaskUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnCreateManyInput = {
    id?: string
    name: string
    boardId: string
  }

  export type ColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    description: string
    status?: string
    column: ColumnCreateNestedOneWithoutTasksInput
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: string
    columnId: string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: string
    columnId: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
  }

  export type SubtaskCreateInput = {
    id?: string
    title: string
    isCompleted?: boolean
    task: TaskCreateNestedOneWithoutSubtasksInput
  }

  export type SubtaskUncheckedCreateInput = {
    id?: string
    title: string
    isCompleted?: boolean
    taskId: string
  }

  export type SubtaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    task?: TaskUpdateOneRequiredWithoutSubtasksNestedInput
  }

  export type SubtaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type SubtaskCreateManyInput = {
    id?: string
    title: string
    isCompleted?: boolean
    taskId: string
  }

  export type SubtaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubtaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    taskId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ColumnListRelationFilter = {
    every?: ColumnWhereInput
    some?: ColumnWhereInput
    none?: ColumnWhereInput
  }

  export type ColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type BoardRelationFilter = {
    is?: BoardWhereInput | null
    isNot?: BoardWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
  }

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
  }

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    boardId?: SortOrder
  }

  export type ColumnRelationFilter = {
    is?: ColumnWhereInput | null
    isNot?: ColumnWhereInput | null
  }

  export type SubtaskListRelationFilter = {
    every?: SubtaskWhereInput
    some?: SubtaskWhereInput
    none?: SubtaskWhereInput
  }

  export type SubtaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    columnId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    columnId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    columnId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type SubtaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    taskId?: SortOrder
  }

  export type SubtaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    taskId?: SortOrder
  }

  export type SubtaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isCompleted?: SortOrder
    taskId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutBoardsInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type ColumnCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<ColumnCreateWithoutBoardInput>, Enumerable<ColumnUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<ColumnCreateOrConnectWithoutBoardInput>
    createMany?: ColumnCreateManyBoardInputEnvelope
    connect?: Enumerable<ColumnWhereUniqueInput>
  }

  export type ColumnUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<ColumnCreateWithoutBoardInput>, Enumerable<ColumnUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<ColumnCreateOrConnectWithoutBoardInput>
    createMany?: ColumnCreateManyBoardInputEnvelope
    connect?: Enumerable<ColumnWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput
    upsert?: UserUpsertWithoutBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
  }

  export type ColumnUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<ColumnCreateWithoutBoardInput>, Enumerable<ColumnUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<ColumnCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<ColumnUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: ColumnCreateManyBoardInputEnvelope
    set?: Enumerable<ColumnWhereUniqueInput>
    disconnect?: Enumerable<ColumnWhereUniqueInput>
    delete?: Enumerable<ColumnWhereUniqueInput>
    connect?: Enumerable<ColumnWhereUniqueInput>
    update?: Enumerable<ColumnUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<ColumnUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<ColumnScalarWhereInput>
  }

  export type ColumnUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<Enumerable<ColumnCreateWithoutBoardInput>, Enumerable<ColumnUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<ColumnCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<ColumnUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: ColumnCreateManyBoardInputEnvelope
    set?: Enumerable<ColumnWhereUniqueInput>
    disconnect?: Enumerable<ColumnWhereUniqueInput>
    delete?: Enumerable<ColumnWhereUniqueInput>
    connect?: Enumerable<ColumnWhereUniqueInput>
    update?: Enumerable<ColumnUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<ColumnUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<ColumnScalarWhereInput>
  }

  export type BoardCreateNestedOneWithoutColumnsInput = {
    create?: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput
    connect?: BoardWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutColumnInput = {
    create?: XOR<Enumerable<TaskCreateWithoutColumnInput>, Enumerable<TaskUncheckedCreateWithoutColumnInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutColumnInput>
    createMany?: TaskCreateManyColumnInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type TaskUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<Enumerable<TaskCreateWithoutColumnInput>, Enumerable<TaskUncheckedCreateWithoutColumnInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutColumnInput>
    createMany?: TaskCreateManyColumnInputEnvelope
    connect?: Enumerable<TaskWhereUniqueInput>
  }

  export type BoardUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput
    upsert?: BoardUpsertWithoutColumnsInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutColumnsInput, BoardUncheckedUpdateWithoutColumnsInput>
  }

  export type TaskUpdateManyWithoutColumnNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutColumnInput>, Enumerable<TaskUncheckedCreateWithoutColumnInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutColumnInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutColumnInput>
    createMany?: TaskCreateManyColumnInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutColumnInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutColumnInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type TaskUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<Enumerable<TaskCreateWithoutColumnInput>, Enumerable<TaskUncheckedCreateWithoutColumnInput>>
    connectOrCreate?: Enumerable<TaskCreateOrConnectWithoutColumnInput>
    upsert?: Enumerable<TaskUpsertWithWhereUniqueWithoutColumnInput>
    createMany?: TaskCreateManyColumnInputEnvelope
    set?: Enumerable<TaskWhereUniqueInput>
    disconnect?: Enumerable<TaskWhereUniqueInput>
    delete?: Enumerable<TaskWhereUniqueInput>
    connect?: Enumerable<TaskWhereUniqueInput>
    update?: Enumerable<TaskUpdateWithWhereUniqueWithoutColumnInput>
    updateMany?: Enumerable<TaskUpdateManyWithWhereWithoutColumnInput>
    deleteMany?: Enumerable<TaskScalarWhereInput>
  }

  export type ColumnCreateNestedOneWithoutTasksInput = {
    create?: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput
    connect?: ColumnWhereUniqueInput
  }

  export type SubtaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<SubtaskCreateWithoutTaskInput>, Enumerable<SubtaskUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<SubtaskCreateOrConnectWithoutTaskInput>
    createMany?: SubtaskCreateManyTaskInputEnvelope
    connect?: Enumerable<SubtaskWhereUniqueInput>
  }

  export type SubtaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<Enumerable<SubtaskCreateWithoutTaskInput>, Enumerable<SubtaskUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<SubtaskCreateOrConnectWithoutTaskInput>
    createMany?: SubtaskCreateManyTaskInputEnvelope
    connect?: Enumerable<SubtaskWhereUniqueInput>
  }

  export type ColumnUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput
    upsert?: ColumnUpsertWithoutTasksInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<ColumnUpdateWithoutTasksInput, ColumnUncheckedUpdateWithoutTasksInput>
  }

  export type SubtaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<Enumerable<SubtaskCreateWithoutTaskInput>, Enumerable<SubtaskUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<SubtaskCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<SubtaskUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: SubtaskCreateManyTaskInputEnvelope
    set?: Enumerable<SubtaskWhereUniqueInput>
    disconnect?: Enumerable<SubtaskWhereUniqueInput>
    delete?: Enumerable<SubtaskWhereUniqueInput>
    connect?: Enumerable<SubtaskWhereUniqueInput>
    update?: Enumerable<SubtaskUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<SubtaskUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<SubtaskScalarWhereInput>
  }

  export type SubtaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<Enumerable<SubtaskCreateWithoutTaskInput>, Enumerable<SubtaskUncheckedCreateWithoutTaskInput>>
    connectOrCreate?: Enumerable<SubtaskCreateOrConnectWithoutTaskInput>
    upsert?: Enumerable<SubtaskUpsertWithWhereUniqueWithoutTaskInput>
    createMany?: SubtaskCreateManyTaskInputEnvelope
    set?: Enumerable<SubtaskWhereUniqueInput>
    disconnect?: Enumerable<SubtaskWhereUniqueInput>
    delete?: Enumerable<SubtaskWhereUniqueInput>
    connect?: Enumerable<SubtaskWhereUniqueInput>
    update?: Enumerable<SubtaskUpdateWithWhereUniqueWithoutTaskInput>
    updateMany?: Enumerable<SubtaskUpdateManyWithWhereWithoutTaskInput>
    deleteMany?: Enumerable<SubtaskScalarWhereInput>
  }

  export type TaskCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateOneRequiredWithoutSubtasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    upsert?: TaskUpsertWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BoardCreateWithoutUserInput = {
    id?: string
    name: string
    columns?: ColumnCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: Enumerable<BoardCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutBoardsInput>
  }

  export type BoardScalarWhereInput = {
    AND?: Enumerable<BoardScalarWhereInput>
    OR?: Enumerable<BoardScalarWhereInput>
    NOT?: Enumerable<BoardScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    userId?: StringFilter | string
  }

  export type UserCreateWithoutBoardsInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutBoardsInput = {
    id?: string
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type ColumnCreateWithoutBoardInput = {
    id?: string
    name: string
    tasks?: TaskCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutBoardInput = {
    id?: string
    name: string
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutBoardInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput>
  }

  export type ColumnCreateManyBoardInputEnvelope = {
    data: Enumerable<ColumnCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBoardsInput = {
    update: XOR<UserUpdateWithoutBoardsInput, UserUncheckedUpdateWithoutBoardsInput>
    create: XOR<UserCreateWithoutBoardsInput, UserUncheckedCreateWithoutBoardsInput>
  }

  export type UserUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnUpsertWithWhereUniqueWithoutBoardInput = {
    where: ColumnWhereUniqueInput
    update: XOR<ColumnUpdateWithoutBoardInput, ColumnUncheckedUpdateWithoutBoardInput>
    create: XOR<ColumnCreateWithoutBoardInput, ColumnUncheckedCreateWithoutBoardInput>
  }

  export type ColumnUpdateWithWhereUniqueWithoutBoardInput = {
    where: ColumnWhereUniqueInput
    data: XOR<ColumnUpdateWithoutBoardInput, ColumnUncheckedUpdateWithoutBoardInput>
  }

  export type ColumnUpdateManyWithWhereWithoutBoardInput = {
    where: ColumnScalarWhereInput
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyWithoutColumnsInput>
  }

  export type ColumnScalarWhereInput = {
    AND?: Enumerable<ColumnScalarWhereInput>
    OR?: Enumerable<ColumnScalarWhereInput>
    NOT?: Enumerable<ColumnScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    boardId?: StringFilter | string
  }

  export type BoardCreateWithoutColumnsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutBoardsInput
  }

  export type BoardUncheckedCreateWithoutColumnsInput = {
    id?: string
    name: string
    userId: string
  }

  export type BoardCreateOrConnectWithoutColumnsInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
  }

  export type TaskCreateWithoutColumnInput = {
    id?: string
    title: string
    description: string
    status?: string
    subtasks?: SubtaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutColumnInput = {
    id?: string
    title: string
    description: string
    status?: string
    subtasks?: SubtaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutColumnInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
  }

  export type TaskCreateManyColumnInputEnvelope = {
    data: Enumerable<TaskCreateManyColumnInput>
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithoutColumnsInput = {
    update: XOR<BoardUpdateWithoutColumnsInput, BoardUncheckedUpdateWithoutColumnsInput>
    create: XOR<BoardCreateWithoutColumnsInput, BoardUncheckedCreateWithoutColumnsInput>
  }

  export type BoardUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput
  }

  export type BoardUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUpsertWithWhereUniqueWithoutColumnInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutColumnInput, TaskUncheckedUpdateWithoutColumnInput>
    create: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutColumnInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutColumnInput, TaskUncheckedUpdateWithoutColumnInput>
  }

  export type TaskUpdateManyWithWhereWithoutColumnInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTasksInput>
  }

  export type TaskScalarWhereInput = {
    AND?: Enumerable<TaskScalarWhereInput>
    OR?: Enumerable<TaskScalarWhereInput>
    NOT?: Enumerable<TaskScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    description?: StringFilter | string
    status?: StringFilter | string
    columnId?: StringFilter | string
  }

  export type ColumnCreateWithoutTasksInput = {
    id?: string
    name: string
    board: BoardCreateNestedOneWithoutColumnsInput
  }

  export type ColumnUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    boardId: string
  }

  export type ColumnCreateOrConnectWithoutTasksInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
  }

  export type SubtaskCreateWithoutTaskInput = {
    id?: string
    title: string
    isCompleted?: boolean
  }

  export type SubtaskUncheckedCreateWithoutTaskInput = {
    id?: string
    title: string
    isCompleted?: boolean
  }

  export type SubtaskCreateOrConnectWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    create: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput>
  }

  export type SubtaskCreateManyTaskInputEnvelope = {
    data: Enumerable<SubtaskCreateManyTaskInput>
    skipDuplicates?: boolean
  }

  export type ColumnUpsertWithoutTasksInput = {
    update: XOR<ColumnUpdateWithoutTasksInput, ColumnUncheckedUpdateWithoutTasksInput>
    create: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
  }

  export type ColumnUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type ColumnUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
  }

  export type SubtaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    update: XOR<SubtaskUpdateWithoutTaskInput, SubtaskUncheckedUpdateWithoutTaskInput>
    create: XOR<SubtaskCreateWithoutTaskInput, SubtaskUncheckedCreateWithoutTaskInput>
  }

  export type SubtaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: SubtaskWhereUniqueInput
    data: XOR<SubtaskUpdateWithoutTaskInput, SubtaskUncheckedUpdateWithoutTaskInput>
  }

  export type SubtaskUpdateManyWithWhereWithoutTaskInput = {
    where: SubtaskScalarWhereInput
    data: XOR<SubtaskUpdateManyMutationInput, SubtaskUncheckedUpdateManyWithoutSubtasksInput>
  }

  export type SubtaskScalarWhereInput = {
    AND?: Enumerable<SubtaskScalarWhereInput>
    OR?: Enumerable<SubtaskScalarWhereInput>
    NOT?: Enumerable<SubtaskScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    isCompleted?: BoolFilter | boolean
    taskId?: StringFilter | string
  }

  export type TaskCreateWithoutSubtasksInput = {
    id?: string
    title: string
    description: string
    status?: string
    column: ColumnCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutSubtasksInput = {
    id?: string
    title: string
    description: string
    status?: string
    columnId: string
  }

  export type TaskCreateOrConnectWithoutSubtasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskUpsertWithoutSubtasksInput = {
    update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
  }

  export type BoardCreateManyUserInput = {
    id?: string
    name: string
  }

  export type BoardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    columns?: ColumnUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateManyWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ColumnCreateManyBoardInput = {
    id?: string
    name: string
  }

  export type ColumnUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateManyWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyColumnInput = {
    id?: string
    title: string
    description: string
    status?: string
  }

  export type TaskUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subtasks?: SubtaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    subtasks?: SubtaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubtaskCreateManyTaskInput = {
    id?: string
    title: string
    isCompleted?: boolean
  }

  export type SubtaskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubtaskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubtaskUncheckedUpdateManyWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }



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