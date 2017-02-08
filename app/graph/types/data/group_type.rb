GroupType = GraphQL::ObjectType.define do
  name "Group"
  description "Group type"

  field :id, types.ID, hash_key: "id"
  field :category_name, types.String, hash_key: "category_name"
  field :created_at, types.String, hash_key: "created_at"
  field :depth_maximum, types.String, hash_key: "depth_maximum"
  field :display_style, types.String, hash_key: "display_style"
  field :example_fields, types.String, hash_key: "example_fields"
  field :example_name, types.String, hash_key: "example_name"
  field :examples_lings_property_name, types.String, hash_key: "examples_lings_property_name"
  field :ling0_name, types.String, hash_key: "ling0_name"
  field :ling1_name, types.String, hash_key: "ling1_name"
  field :ling_fields, types.String, hash_key: "ling_fields"
  field :lings_property_name, types.String, hash_key: "lings_property_name"
  field :name, types.String, hash_key: "name"
  field :privacy, types.String, hash_key: "privacy"
  field :property_name, types.String, hash_key: "property_name"
  field :updated_at, types.String, hash_key: "updated_at"

end