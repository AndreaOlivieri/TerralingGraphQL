Rails.application.routes.draw do
  root :to => 'graphql#index'

  post "/graphql" => "graphql#graphql"
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
end
