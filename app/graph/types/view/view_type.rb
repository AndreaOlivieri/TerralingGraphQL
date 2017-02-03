ViewType = GraphQL::ObjectType.define do
  name "View"
  description "View type"

  field :test, hash_key: :test do
    type types.String
    resolve -> (obj, args, ctx) {
      "test riuscito!!"
    }
  end

  field :version, hash_key: :version do
    type types.String

    resolve -> (obj, args, ctx) {
      GraphqlUtils.post_request("version")["version"]
    }
  end
end