ViewType = GraphQL::ObjectType.define do
  name "View"
  description "View type"

  field :test, hash_key: :test do
    type types.String
    resolve -> (obj, args, ctx) {
      "test riuscito!!"
    }
  end
end