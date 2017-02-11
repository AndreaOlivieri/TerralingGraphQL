class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def graphql
    query = GraphqlSchema.execute(params[:query], variables: params[:variables])
    render json: query
  end

  def groups_list
    render json: GraphqlUtils.get_request("groups/list")
  end
end
