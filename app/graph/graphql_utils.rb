require "uri"
require 'net/http'
require 'json'

module GraphqlUtils

  def self.post_request(url, data=nil)
    set_request(Net::HTTP::Post, url, data)
  end

  def self.get_request(url, data=nil)
    set_request(Net::HTTP::Get, url, data)
  end

  private

    def self.set_request(http_method, url, data)
      website = 'http://localhost:3001'
      uri = URI("#{website}/#{url}")
      req = http_method.new(uri.path, 'Content-Type' =>'application/json')
      req.body = data.to_json

      res = Net::HTTP.start(uri.hostname, uri.port) do |http|
        http.request(req)
      end

      begin
        JSON.parse(res.body)
      rescue Exception => e
        res.body
      end
    end
end