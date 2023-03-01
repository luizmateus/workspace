// Verificando branch de pipeline.
const branch = process.env.CI_COMMIT_BRANCH;
const isLatest = branch === 'master';

// Verificar nome do CHANGELOG e lista de assets para o commit de versão.
const changelogName = `CHANGELOG${isLatest ? '' : '_rc'}.md`;
const assetsList = [changelogName];

// Se for a versão latest, incluir o package.json na lista de assets.
if (isLatest) {
  assetsList.push('package.json');
}

const config = {
  branches: [
    // Versão @latest.
    'master',

    // Versão @rc.
    {
      name: 'develop',
      channel: 'rc',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: changelogName,
      },
    ],
    [
      'semantic-release-codeartifact',
      {
        tool: 'npm',
        domain: 'mobk',
        repository: 'mobk',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: assetsList,
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};

module.exports = config;
