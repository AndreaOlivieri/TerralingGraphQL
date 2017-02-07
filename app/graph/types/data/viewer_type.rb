ViewerType = GraphQL::ObjectType.define do
  name "Viewer"
  description "Viewer type"

  field :id, types.Int, hash_key: "id"
  field :email, types.String, hash_key: "email"
  field :encrypted_password, types.String, hash_key: "encrypted_password"
  field :password_salt, types.String, hash_key: "password_salt"
  field :reset_password_token, types.String, hash_key: "reset_password_token"
  field :remember_token, types.String, hash_key: "remember_token"
  field :remember_created_at, types.String, hash_key: "remember_created_at"
  field :sign_in_count, types.Int, hash_key: "sign_in_count"
  field :current_sign_in_at, types.String, hash_key: "current_sign_in_at"
  field :last_sign_in_at, types.String, hash_key: "last_sign_in_at"
  field :current_sign_in_ip, types.String, hash_key: "current_sign_in_ip"
  field :last_sign_in_ip, types.String, hash_key: "last_sign_in_ip"
  field :created_at, types.String, hash_key: "created_at"
  field :updated_at, types.String, hash_key: "updated_at"
  field :name, types.String, hash_key: "name"
  field :access_level, types.String, hash_key: "access_level"
  field :topics_count, types.Int, hash_key: "topics_count"
  field :posts_count, types.Int, hash_key: "posts_count"

  field :memberships, hash_key: "memberships" do
    type MembershipType.to_list_type

    resolve -> (obj, args, ctx) {
      user_id = obj["id"]
      GraphqlUtils.get_request("graphql/viewer/"+user_id.to_s+"/memberships").map {|x| x['membership']}
    }
  end

  field :groups, hash_key: "groups" do
    type GroupType.to_list_type

    resolve -> (obj, args, ctx) {
      user_id = obj["id"]
      GraphqlUtils.get_request("graphql/viewer/"+user_id.to_s+"/groups").map {|x| x['group']}
    }
  end

end

MembershipType = GraphQL::ObjectType.define do
  name "Membership"
  description "Membership type"

  field :id, types.Int, hash_key: "id"
  field :member_id, types.Int, hash_key: "member_id"
  field :group_id, types.Int, hash_key: "group_id"
  field :level, types.String, hash_key: "level"
  field :created_at, types.String, hash_key: "created_at"
  field :updated_at, types.String, hash_key: "updated_at"
  field :creator_id, types.Int, hash_key: "creator_id"
end