## Change the ownership of lots of Github repos in bulk.

Inspired by `github-change-ownership-in-bulk` by `apostrophecms`

I needed to move dozens of Github repos from other organizations to my personal account and `github-change-ownership-in-bulk` didn't suit my needs because it involved teams which I'm not using.

Here's a short Node program to very simply transfer ownership from one Github user or organization to another user or organization.

Open `config-example.js` and use your Github Personal Access Token (PAT) for `<your token>`.  You can generate a PAT at `https://github.com/settings/tokens`.

Then copy `config-example.js` to `config.js`

## Code files

### `listOrgRepos`

Lists the Github repos for the provided organization. Open the file and edit the following constants:

* `ORG` The organization whose repos you want to list
* `PER_PAGE` The number of entries to list per output page (100 maximum)
* `PAGE` The page number to display (pages start with 1)

### `listUserRepos`

Lists the Github repos for the provided user. Open the file and edit the following constants:

* `USER` The user whose repos you want to list
* `PER_PAGE` The number of entries to list per output page (100 maximum)
* `PAGE` The page number to display (pages start with 1)

### `transfer`

Moves the Github repos from one user or organization to another user or organization. Open the file and edit the following constants:

* `FROM` The source user or organization
* `TO` The destination user or organization
* `REPOS` An array of the repo names to be transferred 

Use `listOrgRepos` and `listUserRepos` to generate a list of the repos in that user or organization. Copy the list of repos and paste into the `REPOS` constant to make your job easier.

### Error handling

There isn't any. If any of the programs encounter an error it will stop; see the output to figure out what happened.

### Other stuff

* Yes, Github leaves a trail of redirects behind. Don't recreate the repos in the original org though; that will break the redirects.

* Obviously there is NO warranty on this package. Use at your own risk. It worked for me -- your mileage may vary.

* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


