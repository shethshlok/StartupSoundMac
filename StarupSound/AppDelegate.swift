import Cocoa
import AVFoundation

class AppDelegate: NSObject, NSApplicationDelegate {
    
    var statusItem: NSStatusItem!
    var soundPlayer: AVAudioPlayer?
    var soundEnabled: Bool = true
    var soundFilePath: URL?
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        print("Application did finish launching")
        
        // Create the status item
        statusItem = NSStatusBar.system.statusItem(withLength: NSStatusItem.squareLength)
        if let button = statusItem.button {
            button.title = "🔊"
            button.action = #selector(showMenu)
        }
        
        // Create the menu
        let menu = NSMenu()
        menu.addItem(NSMenuItem(title: "Select Sound File", action: #selector(selectSoundFile), keyEquivalent: "s"))
        menu.addItem(NSMenuItem(title: "Toggle Sound", action: #selector(toggleSound), keyEquivalent: "t"))
        menu.addItem(NSMenuItem(title: "Test Sound", action: #selector(testSound), keyEquivalent: "p"))
        menu.addItem(NSMenuItem.separator())
        menu.addItem(NSMenuItem(title: "Quit", action: #selector(NSApplication.terminate), keyEquivalent: "q"))
        statusItem.menu = menu
        
        // Add notification observers for system events
        addNotificationObservers()
        
        print("Notification observers added")
        
        // Prompt user to select a sound file if none is set
        if soundFilePath == nil {
            DispatchQueue.main.async {
                self.selectSoundFile()
            }
        }
    }
    
    func addNotificationObservers() {
        NSWorkspace.shared.notificationCenter.addObserver(
            self,
            selector: #selector(playSoundOnUnlock),
            name: NSWorkspace.sessionDidBecomeActiveNotification,
            object: nil
        )
        
        DistributedNotificationCenter.default().addObserver(
            self,
            selector: #selector(handleScreenUnlock),
            name: NSNotification.Name("com.apple.screenIsUnlocked"),
            object: nil
        )
        
        // Add observer for application becoming active
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(handleAppBecomeActive),
            name: NSApplication.didBecomeActiveNotification,
            object: nil
        )
    }
    
    @objc func showMenu() {
        if let button = statusItem.button {
            statusItem.menu?.popUp(positioning: nil, at: NSPoint(x: 0, y: button.frame.height), in: button)
        }
    }
    
    @objc func selectSoundFile() {
        let openPanel = NSOpenPanel()
        openPanel.title = "Select a Sound File"
        openPanel.allowedFileTypes = ["mp3", "wav"]
        openPanel.canChooseFiles = true
        openPanel.canChooseDirectories = false
        openPanel.begin { (result) in
            if result == .OK, let url = openPanel.url {
                self.soundFilePath = url
                self.loadSound()
            }
        }
    }
    
    func loadSound() {
        guard let soundFilePath = soundFilePath else {
            print("No sound file path set")
            return
        }
        do {
            soundPlayer = try AVAudioPlayer(contentsOf: soundFilePath)
            soundPlayer?.prepareToPlay()
            print("Loaded sound from \(soundFilePath.lastPathComponent)")
        } catch {
            print("Error loading sound file: \(error)")
            DispatchQueue.main.async {
                self.showAlert(title: "Error", message: "Failed to load sound file: \(error.localizedDescription)")
            }
        }
    }
    
    @objc func toggleSound() {
        soundEnabled.toggle()
        let state = soundEnabled ? "enabled" : "disabled"
        print("Sound is now \(state)")
    }
    
    @objc func playSoundOnUnlock(_ notification: Notification) {
        print("Session did become active notification received")
        if soundEnabled {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                self.playSound()
            }
        } else {
            print("Sound is disabled")
        }
    }
    
    @objc func handleScreenUnlock(_ notification: Notification) {
        print("Screen unlock notification received: \(notification.name)")
        if soundEnabled {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                self.playSound()
            }
        } else {
            print("Sound is disabled")
        }
    }
    
    @objc func handleAppBecomeActive(_ notification: Notification) {
        print("Application became active")
        // You can add additional logic here if needed
    }
    
    @objc func testSound() {
        print("Test sound requested")
        playSound()
    }
    
    func playSound() {
        if let player = soundPlayer {
            if player.isPlaying {
                player.stop()
            }
            player.currentTime = 0
            player.play()
            print("Attempting to play sound")
        } else {
            print("Sound player is not initialized")
        }
    }
    
    func showAlert(title: String, message: String) {
        let alert = NSAlert()
        alert.messageText = title
        alert.informativeText = message
        alert.alertStyle = .warning
        alert.addButton(withTitle: "OK")
        alert.runModal()
    }
}
