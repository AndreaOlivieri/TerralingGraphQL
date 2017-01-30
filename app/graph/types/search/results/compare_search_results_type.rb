CompareSearchResultsType = GraphQL::ObjectType.define do
  name "CompareSearchResults"
  description "Compare Search Results Type"

  field :commons,    TableResultsType, hash_key: :commons
  field :differents, TableResultsType, hash_key: :differents
end