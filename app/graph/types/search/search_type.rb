SearchType = GraphQL::ObjectType.define do
  name "Search"
  description "Search type"

  field :compare, hash_key: :compare do
    type CompareSearchResultsType

    argument :search_id, types.ID
    argument :user_id, types.ID
    argument :group_id, !types.ID
    argument :query, !types.String
    argument :result_groups, types.String
    argument :offset, types.Int
    resolve -> (obj, args, ctx) {
      GraphqlSearch.new(args).compare_response
    }
  end

  field :cross, hash_key: :cross do
    type TableResultsType

    argument :search_id, types.ID
    argument :user_id, types.ID
    argument :group_id, !types.ID
    argument :query, !types.String
    argument :result_groups, types.String
    argument :offset, types.Int
    resolve -> (obj, args, ctx) {
      GraphqlSearch.new(args).cross_response
    }
  end
end