platform :android do
  desc "Trocar Nome"
  lane :name do |options|
    Dir.chdir("../android") do
      app_gradle_path = "./app/build.gradle"
      google_services_path = "./app/google-services.json"
      main_activity_path = "./app/src/main/java/com/original/mobk/MainActivity.java"
      strings_path = "./app/src/main/res/values/strings.xml"

      sh "sed -i.script 's/\"com.original.mobk\"/\"com.original.#{options[:name].downcase}\"/g' #{app_gradle_path}"
      sh "sed -i.script 's/\"com.original.mobk\"/\"com.original.#{options[:name].downcase}\"/g' #{google_services_path}"
      sh "sed -i.script 's/\"Original\"/\"#{options[:name]}\"/g' #{main_activity_path}"
      sh "sed -i.script 's/>Original</>#{options[:name]}</g' #{strings_path}"

      sh "rm -rf #{app_gradle_path}.script"
      sh "rm -rf #{google_services_path}.script"
      sh "rm -rf #{main_activity_path}.script"
      sh "rm -rf #{strings_path}.script"
    end
  end

  desc "Gerar Aplicativo"
  lane :generate do |options|
    gradle(
      task: "clean",
      project_dir: "android",
    )
    gradle(
      task: "package",
      flavor: options[:flavor],
      build_type: "Release",
      project_dir: "android",
    )
  end

  desc "Mover Artefatos"
  lane :artifacts do |options|
    Dir.chdir("..") do
      sh "mv android/app/build/outputs/apk/homolog/release/app-homolog-release.apk fastlane/build/mobk-#{options[:flavor]}-#{options[:name]}.apk"
    end
  end
end
