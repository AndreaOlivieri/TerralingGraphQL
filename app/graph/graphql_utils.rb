require "uri"
require 'net/http'
require 'json'

module GraphqlUtils

  def self.post_request(url, data=nil)
    website = 'http://localhost:3001'
    uri = URI("#{website}/#{url}")
    req = Net::HTTP::Post.new(uri.path, 'Content-Type' =>'application/json')
    req.body = data

    res = Net::HTTP.start(uri.hostname, uri.port) do |http|
      http.request(req)
    end

    JSON.parse(res.body)
  end
end