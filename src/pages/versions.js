import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { usePluginData } from '@docusaurus/useGlobalData';

function Version() {
  const { versions: [nextVersion, latestVersion, ...pastVersions ] } = usePluginData('docusaurus-plugin-content-docs')

  return (
    <Layout
      title="Versions"
      permalink="/versions"
      description="SerialPort Versions page listing all documented versions">
      <main className="container margin-vert--lg">
        <h1>SerialPort documentation versions</h1>

        <div className="margin-bottom--lg">
          <h3 id="latest">Current Version</h3>
          <p>
            Here you can find the documentation for the current version of SerialPort
          </p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion.label}</th>
                <td>
                  <Link to={latestVersion.path}>Documentation</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="margin-bottom--lg">
          <h3 id="latest">Next Version</h3>
          <p>
            Here you can find the documentation for the next unreleased version of SerialPort
          </p>
          <table>
            <tbody>
              <tr>
                <th>{nextVersion.label}</th>
                <td>
                  <Link to={nextVersion.path}>Documentation</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="margin-bottom--lg">
          <h3 id="archive">Past versions (Not maintained anymore)</h3>
          <p>
            Here you can find documentation for previous versions of SerialPort
          </p>
          <table>
            <tbody>
              {pastVersions.map((version) => (
                <tr key={version.name}>
                  <th>{version.label}</th>
                  <td>
                    <Link to={version.path}>Documentation</Link>
                  </td>
                  {/* <td>
                    <a href={`${repoUrl}/releases/tag/v${version.name}`}>
                      Release Notes
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}

export default Version;
