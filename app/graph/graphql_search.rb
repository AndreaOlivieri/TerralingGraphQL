class GraphqlSearch

  require "uri"
  require 'net/http'
  require 'json'

  def initialize(args)
    # current_user = args[:user_id] && User.find(args[:user_id])
    # current_group = Group.find(args[:group_id])

    # if args[:search_id].present?
    #   search = current_group.searches.find(args[:search_id])
    # else
    #   search = Search.new do |s|
    #     s.creator       = current_user
    #     s.group         = current_group
    #     s.query         = JSON.parse(args[:query])
    #     #the only way to calculate a compare search is passing the result group param,
    #     #without it compare search will calculate a wrong result.
    #     s.result_groups = args[:result_groups]
    #     s.offset        = args[:offset] || 0
    #   end
    # end

    # website = 'http://localhost:3001'
    # url = "#{website}/groups/#{args[:group_id]}/searches/get_results"
    # uri = URI(url)
    # req = Net::HTTP::Post.new(uri.path, initheader => {'Content-Type' =>'application/json'})
    # req.body = {param1: 'some value', param2: 'some other value'}.to_json
    # res = Net::HTTP.start(uri.hostname, uri.port) do |http|
    #   http.request(req)
    # end

    website = 'http://localhost:3001'
    uri = URI("#{website}/groups/#{args[:group_id]}/searches/get_results")
    req = Net::HTTP::Post.new(uri.path, 'Content-Type' =>'application/json')
    req.body = { "id" => args[:search_id],
                 "user_id" => args[:user_id],
                 "group_id" => args[:group_id],
                 "search" => JSON.parse(args[:query]),
                 "result_groups" => args[:result_groups]
                }.to_json

    res = Net::HTTP.start(uri.hostname, uri.port) do |http|
      http.request(req)
    end

    @response = JSON.parse(res.body)

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