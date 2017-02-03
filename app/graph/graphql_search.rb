class GraphqlSearch

  include GraphqlUtils

  def initialize(args)
    url = "groups/#{args[:group_id]}/searches/get_results"
    data = { "id" => args[:search_id],
             "user_id" => args[:user_id],
             "group_id" => args[:group_id],
             "search" => JSON.parse(args[:query]),
             "result_groups" => args[:result_groups]
    }.to_json

    @response = GraphqlUtils.post_request(url, data)
  end

  def compare_response
    common_header, common_rows = [], []
    if @response["header"]["commons"]["compare_property"].present?
      common_header = [ @response["header"]["commons"]["compare_property"], @response["header"]["commons"]["common_values"] ]
      common_rows = @response["rows"].select { |row| row["child"].count == 1}.map do |row|
        values = row["parent"].map {|parent| parent["value"]}
        [row["prop"]["name"]].concat(values)
      end
    end

    different_header, different_rows = [], []
    if @response["header"]["differents"]["compare_property"].present?
      different_header = [@response["header"]["differents"]["compare_property"]].concat(@response["header"]["differents"]["ling_value"])
      different_rows = @response["rows"].select { |row| row["child"].count > 1}.map do |row|
        values = row["child"].map {|child| child && child["lings_property"]["value"] || ""}
        [row["prop"]["name"]].concat(values)
      end
    end

    {
      commons: {
        header: common_header,
        rows: common_rows
      },
      differents: {
        header: different_header,
        rows: different_rows
      }
    }
  end

  def cross_response

    binding.pry
    {
      header: [],
      rows: []
    }
  end
end