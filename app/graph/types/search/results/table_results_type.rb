TableResultsType = GraphQL::ObjectType.define do
  name "TableResults"
  description "Table Results Type"

  field :header, types.String.to_list_type,              hash_key: :header
  field :rows,   types.String.to_list_type.to_list_type, hash_key: :rows
end



# RowsSearchResultsType = GraphQL::ObjectType.define do
#   name "RowsSearchResults"
#   description "Rows Search Results Type"

#   field :parent, LingsPropertyType.to_list_type
#   field :child, LingsPropertyType.to_list_type
#   field :lings, LingType.to_list_type
#   field :prop, PropType
# end

# LingsPropertyType = GraphQL::ObjectType.define do
#   name "LingsProperty"
#   description "Lings Property Type"

#   field :id, types.ID
#   field :ling_id, types.ID
#   field :property_id, types.ID
#   field :value, types.String
#   field :created_at, types.String
#   field :updated_at, types.String
#   field :group_id, types.ID
#   field :creator_id, types.ID
#   field :property_value, types.String
#   field :sureness, types.Boolean
# end

# LingType = GraphQL::ObjectType.define do
#   name "Ling"
#   description "Ling Type"

#   field :id, types.ID
#   field :name, types.String
#   field :created_at, types.String
#   field :updated_at, types.String
#   field :depth, types.Int
#   field :parent_id, types.ID
#   field :group_id, types.ID
#   field :creator_id, types.ID
# end

# PropType = GraphQL::ObjectType.define do
#   name "Prop"
#   description "Prop Type"

#   field :id, types.ID, hash_key: "id"
#   field :name, types.String, hash_key: "name"
#   field :created_at, types.String, hash_key: "created_at"
#   field :updated_at, types.String, hash_key: "updated_at"
#   field :group_id, types.ID, hash_key: "group_id"
#   field :category_id, types.ID, hash_key: "category_id"
#   field :creator_id, types.ID, hash_key: "creator_id"
#   field :description, types.String, hash_key: "description"
# end