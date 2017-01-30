class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def graphql
    query = GraphqlSchema.execute(params[:query], variables: params[:variables])
    render json: query
  end
end
