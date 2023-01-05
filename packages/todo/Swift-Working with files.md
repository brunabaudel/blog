---
priority: low
isCodestory: true
headerImage: ![](./abstract-3840x2160-colorful-lines-4k-20643.jpg)
privacy: public
language: english
---

A `FileControl` class to work with `FileManager` and the Documents Directory (iOS 2+)

```
import Foundation

final class FileControl {
    static private var documentDirectoryURL: URL? {
        guard let dir = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first else {
            NSLog("Unable to find the document directory")
            return nil
        }
        return dir
    }
    
    static func write(url: URL?, content: String) {
        do {
            guard let url = url else { return }
            try content.write(to: url, atomically: false, encoding: .utf8)
        } catch {
            NSLog(error.localizedDescription)
        }
    }

    static func read(url: URL?) -> String {
        do {
            guard let url = url else { return "" }
            return try String(contentsOf: url, encoding: .utf8)
        } catch {
            NSLog(error.localizedDescription)
        }
        return ""
    }

    static func copyToDocuments(fileName: String, ext: String) {
        guard let documentsURL = findURL(fileName: fileName, ext: ext) else { return }
        guard let sourceURL = Bundle.main.url(forResource: fileName, withExtension: ext) else {
            NSLog("Source File not found.")
            return
        }
        do {
            if !FileManager.default.fileExists(atPath: documentsURL.path) {
                try FileManager.default.copyItem(at: sourceURL, to: documentsURL)
            }
        } catch {
            NSLog("Unable to copy file")
        }
    }

    static func findURL(fileName: String, ext: String) -> URL? {
        return documentDirectoryURL?.appendingPathComponent(fileName).appendingPathExtension(ext)
    }
    
    static func findAllURLs() -> [URL]? {
        do {
            return try FileManager.default.contentsOfDirectory(at: documentDirectoryURL ?? URL(fileURLWithPath: ""), includingPropertiesForKeys: nil)
        } catch {
            NSLog("Unable to find the directory")
        }
        return nil
    }
}
```

 https://developer.apple.com/documentation/foundation/filemanager
