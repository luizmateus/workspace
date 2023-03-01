# Preparação de Ambiente

platform :prepare do
  desc "Executar Yarn"
  lane :yarn do |options|
    pkg = options[:pkg] || ""

    if pkg != 'latest' && pkg != 'rc'
      raise 'Você precisa informar o parâmetro `pkg` com valor `rc` ou `latest`'
    end

    Dir.chdir("..") do
      # Atualizar instalações.
      mobkPkgs = ""
      mobkPkgsVersion = ""
      package_json = JSON.parse(File.read("package.json"))
      package_json['dependencies'].each do |key, value|
        if key.include? "@mobk"
          mobkPkgs = "#{mobkPkgs} #{key}"
          mobkPkgsVersion = "#{mobkPkgsVersion} #{key}@#{pkg}"
        end
      end

      sh "yarn remove #{mobkPkgs}"
      sh "yarn"
      sh "yarn add #{mobkPkgsVersion}"
    end
  end

  desc "Trocar Versão"
  lane :version do |options|
    version = options[:version] || ""

    if version.empty?
      raise 'Você precisa informar o parâmetro `version`'
    end

    Dir.chdir("..") do
      sh "npm version #{version} -f --allow-same-version --no-git-tag-version"
      sh "npx react-native-version -A -B"
    end
  end

  desc "Trocar Módulo"
  lane :module do |options|
    deployModule = options[:module] || ""

    if deployModule.empty?
      raise 'Você precisa informar o parâmetro `module`'
    end

    Dir.chdir("..") do
      deployment_path = "./src/modules/ModuleDeployment.ts"
      File.write(deployment_path, "export default '#{deployModule}';\n")
    end
  end

  desc "Trocar Nome"
  lane :name do |options|
    deployName = options[:name] || ""

    if deployName.empty?
      raise 'Você precisa informar o parâmetro `name`'
    end

    Dir.chdir("..") do
      app_json = JSON.parse(File.read("app.json"))
      app_json["name"] = deployName
      app_json["displayName"] = deployName
      File.write("app.json", JSON.pretty_generate(app_json))
    end
  end
end
