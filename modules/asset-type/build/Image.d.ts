export interface Image {
    /**
     * relative path to where the image is stored in the OS
     *
     * there should be a function later, that formats that to an URL that is accessible from the internet, if any
     */
    projectRelativePath: string;
    width: number;
    height: number;
    /**
     * small base64 generated for this image
     */
    base64: string;
    /**
     * caption that can be provided for this image
     *
     * if not given, it can either be auto-generated by AI or it can be based on the model the image is attached to.
     */
    caption: string;
}
//# sourceMappingURL=Image.d.ts.map