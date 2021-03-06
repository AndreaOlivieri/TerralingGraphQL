UserType = GraphQL::ObjectType.define do
  name "User"
  description "User type"

  field :id, types.ID, hash_key: "id"
  field :name, types.String, hash_key: "name"
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
  field :access_level, types.String, hash_key: "access_level"
  field :topics_count, types.Int, hash_key: "topics_count"
  field :posts_count, types.Int, hash_key: "posts_count"

  field :memberships, hash_key: "memberships" do
    type MembershipType.to_list_type

    resolve -> (obj, args, ctx) {
      user_id = obj["id"].to_s
      GraphqlUtils.get_request("graphql/user/"+user_id+"/memberships").map {|x| x['membership']}
    }
  end

end