export type DownloadFileNamedParams = Partial<{
  filename: string;
}>;

export const downloadFile = (
  url: string,
  { filename }: DownloadFileNamedParams = {}
) => {
  const anchor = document.createElement('a');
  anchor.href = url;

  if (filename) {
    anchor.download = filename;
  }

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
