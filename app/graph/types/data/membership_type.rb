MembershipType = GraphQL::ObjectType.define do
  name "Membership"
  description "Membership type"

  field :id, types.ID, hash_key: "id"
  field :member_id, types.ID, hash_key: "member_id"
  field :group_id, types.ID, hash_key: "group_id"
  field :level, types.String, hash_key: "level"
  field :created_at, types.String, hash_key: "created_at"
  field :updated_at, types.String, hash_key: "updated_at"
  field :creator_id, types.ID, hash_key: "creator_id"

  field :group, hash_key: :group do
    type GroupType

    resolve -> (obj, args, ctx) {
      membership_id = obj["id"].to_s
      GraphqlUtils.get_request("graphql/membership/"+membership_id+"/group")['group']
    }
  end
end