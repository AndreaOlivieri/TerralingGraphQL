InfoType = GraphQL::ObjectType.define do
  name "Info"
  description "Info type"

  field :test, hash_key: :test do
    type types.String
    resolve -> (obj, args, ctx) {
      "test riuscito!!"
    }
  end
end