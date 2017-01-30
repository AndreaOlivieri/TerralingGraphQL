desc "it builds the jsons"

  task generate_graphql_schema: :environment do
    schema_json = JSON.pretty_generate(GraphqlSchema.execute(GraphQL::Introspection::INTROSPECTION_QUERY))
    File.open("app/graph/schema.json", "w") { |file| file.write(schema_json) }
  end