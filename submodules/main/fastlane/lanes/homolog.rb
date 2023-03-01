# Deploy para Homologação

platform :homolog do
  desc "Gerar Aplicativo FULL"
  lane :full do |options|
    sh "fastlane prepare yarn pkg:latest"
    sh "fastlane prepare module module:*"

    sh "fastlane android generate flavor:Homolog"
    sh "fastlane ios generate flavor:Homolog"
    
    sh "rm -rf build"
    sh "mkdir -p build"
    sh "fastlane android artifacts flavor:Homolog name:Original"
    sh "fastlane ios artifacts flavor:Homolog name:Original"
  end

  desc "Gerar App STANDALONE"
  lane :standalone do |options|
    deployVersion = options[:version] || ""
    deployModule = options[:module] || ""
    deployName = options[:name] || ""

    if deployVersion.empty? || deployModule.empty? || deployName.empty?
      raise "Você precisa informar os parâmetros `version`, `module` e `name`. Ex: `fastlane homolog standalone version:1.0.4 name:Example module:@mobk/module-example`"
    end

    sh "fastlane prepare yarn pkg:latest"
    sh "fastlane prepare version version:#{deployVersion}"
    sh "fastlane prepare module module:#{deployModule}"
    sh "fastlane prepare name name:#{deployName}"

    sh "fastlane android name name:#{deployName}"
    sh "fastlane android generate flavor:Homolog"

    sh "fastlane ios name name:#{deployName}"
    sh "fastlane ios generate flavor:Homolog"

    sh "rm -rf build"
    sh "mkdir build"
    sh "fastlane android artifacts flavor:Homolog name:#{deployName}"
    sh "fastlane ios artifacts flavor:Homolog name:#{deployName}"
  end
end
