QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema"

  field :search do
    type SearchType

    resolve -> (obj, args, ctx) {
      {
        compare: "",
        cross: ""
      }
    }
  end

  field :view do
    type ViewType

    resolve -> (obj, args, ctx) {
      {}
    }
  end
end