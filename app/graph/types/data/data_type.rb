DataType = GraphQL::ObjectType.define do
  name "Data"
  description "Data type"

  field :test, hash_key: :test do
    type types.String
    resolve -> (obj, args, ctx) {
      "test riuscito!!"
    }
  end

  field :version, hash_key: :version do
    type types.String

    resolve -> (obj, args, ctx) {
      GraphqlUtils.get_request("graphql/version")
    }
  end

  field :group, hash_key: :group do
    type GroupType

    argument :group_id, types.ID
    resolve -> (obj, args, ctx) {
      GraphqlUtils.get_request("graphql/group", {group_id: args[:group_id]})['group']
    }
  end

  field :groups, hash_key: :groups do
    type GroupType.to_list_type

    resolve -> (obj, args, ctx) {
      GraphqlUtils.get_request("graphql/groups").map {|x| x['group']}
    }
  end

  field :user, hash_key: :user do
    type UserType

    resolve -> (obj, args, ctx) {
      GraphqlUtils.get_request("graphql/user")['user']
    }
  end

end