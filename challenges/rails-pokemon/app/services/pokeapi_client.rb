# Thin wrapper around PokeAPI (https://pokeapi.co/docs/v2).
class PokeapiClient
  BASE_URL = "https://pokeapi.co/api/v2"

  # Makes a GET request to the given PokeAPI path or full URL and returns the parsed JSON body.
  def get(url)
    response = connection.get(url)
    raise "PokeAPI request to #{url} failed with status #{response.status}" unless response.success?

    response.body
  end

  private

  def connection
    @connection ||= Faraday.new { |f| f.response :json }
  end
end
