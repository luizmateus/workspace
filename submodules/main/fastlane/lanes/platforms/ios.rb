platform :ios do
  desc "Trocar Nome"
  lane :name do |options|
    Dir.chdir("../ios") do
      project_pbxproj_path = "./Original.xcodeproj/project.pbxproj"
      info_plist_path = "./Original/Info.plist"

      sh "sed -i.script 's/com.original.mobk;/com.original.#{options[:name].downcase};/g' #{project_pbxproj_path}"
      sh "sed -i.script 's/>Original</>#{options[:name]}</g' #{info_plist_path}"

      sh "rm -rf #{project_pbxproj_path}.script"
      sh "rm -rf #{info_plist_path}.script"
    end
  end

  desc "Gerar Aplicativo"
  lane :generate do |options|
    Dir.chdir("../ios") do
      xcodebuild_command = "xcodebuild -workspace Original.xcworkspace -configuration Release -scheme Original#{options[:flavor]}"
      sh "pod repo update"
      sh "pod install --verbose"
      build_ios_app(
        workspace: "ios/Original.xcworkspace",
        configuration: "Release",
        scheme: "Original#{options[:flavor]}",
        clean: true,
        output_name: "mobk.ipa",
        export_method: "development"
      )
    end
  end

  desc "Mover Artefatos"
  lane :artifacts do |options|
    Dir.chdir("..") do
      sh "mv mobk.ipa fastlane/build/mobk-#{options[:flavor]}-#{options[:name]}.ipa"
      sh "mv mobk.app.dSYM.zip fastlane/build/mobk-#{options[:flavor]}-#{options[:name]}.app.dSYM.zip"
    end
  end
end
